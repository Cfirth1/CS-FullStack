const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const newsService = require('../services/newsService');

// Middleware to check admin role
function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  return res.status(403).send('Forbidden: Admins only');
}

// Admin dashboard
router.get('/', isAdmin, (req, res) => {
  res.render('admin', { title: 'Admin Dashboard' });
});

// List all users
router.get('/users', isAdmin, (req, res) => {
  userService.getAllUsers((err, users) => {
    if (err) return res.status(500).send('Error fetching users');
    res.render('admin_users', { title: 'Manage Users', users });
  });
});

// List all news articles
router.get('/news', isAdmin, (req, res) => {
  newsService.getAllNews((err, news) => {
    if (err) return res.status(500).send('Error fetching news');
    res.render('admin_news', { title: 'Manage News', news });
  });
});

module.exports = router;
