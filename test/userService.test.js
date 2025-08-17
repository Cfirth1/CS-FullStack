const assert = require('assert');
const userService = require('../services/userService');

describe('User Service', function() {
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
