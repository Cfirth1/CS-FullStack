// Service to interact with users table in SQLite
const db = require('./db');
const bcrypt = require('bcrypt');

function registerUser({ username, password, email, role }, callback) {
  const userRole = role || 'user';
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    db.run(
      'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)',
      [username, hash, email, userRole],
      function(err) {
        callback(err, { id: this.lastID, username, email, role: userRole });
      }
    );
  });
}

function findUserByUsername(username, callback) {
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    callback(err, row);
  });
}

function getAllUsers(callback) {
  db.all('SELECT id, username, email, role FROM users', [], callback);
}

module.exports = {
  registerUser,
  findUserByUsername,
  getAllUsers
};
