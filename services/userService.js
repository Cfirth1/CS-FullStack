// Service to interact with users table in SQLite
const db = require('./db');
const bcrypt = require('bcrypt');

function registerUser({ username, password, email }, callback) {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    db.run(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, hash, email],
      function(err) {
        callback(err, { id: this.lastID });
      }
    );
  });
}

function findUserByUsername(username, callback) {
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    callback(err, row);
  });
}

module.exports = {
  registerUser,
  findUserByUsername
};
