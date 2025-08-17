const assert = require('assert');
const userService = require('../services/userService');
const db = require('../services/db');

describe('User Service', function() {
  before(function(done) {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL DEFAULT 'user'
    )`, done);
  });

  it('should register a new user', function(done) {
    userService.registerUser({ username: 'testuser', password: 'testpass', email: 'test@example.com' }, (err, user) => {
      assert.ifError(err);
      assert.strictEqual(user.username, 'testuser');
      assert.strictEqual(user.email, 'test@example.com');
      done();
    });
  });

  it('should find a user by username', function(done) {
    userService.findUserByUsername('testuser', (err, user) => {
      assert.ifError(err);
      assert.strictEqual(user.username, 'testuser');
      done();
    });
  });
});
