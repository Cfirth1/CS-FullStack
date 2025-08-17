var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
const bcrypt = require('bcrypt');

// POST /auth/register
router.post('/register', function(req, res) {
  userService.registerUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Registration failed' });
    }
    res.status(201).json(result);
  });
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  userService.findUserByUsername(username, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      // For now, just return user info (session management can be added next)
      res.json({ id: user.id, username: user.username, email: user.email });
    });
  });
  // Successful login: set session
  req.session.user = {
    id: user.id,
    username: user.username,
    email: user.email
  };
  res.json({ success: true });
});

// Logout endpoint
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.json({ error: 'Logout failed.' });
    }
    res.json({ success: true });
  });
});

module.exports = router;
