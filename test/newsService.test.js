const assert = require('assert');
const newsService = require('../services/newsService');

describe('News Service', function() {
  it('should add a news article', function(done) {
    const news = { title: 'Test News', date: '2025-08-16', author: 'Admin', content: 'Test content.' };
    newsService.addNews(news, (err, result) => {
      assert.ifError(err);
      assert.ok(result.id);
      done();
    });
  });

  it('should get all news articles', function(done) {
    newsService.getAllNews((err, news) => {
      assert.ifError(err);
      assert.ok(Array.isArray(news));
      done();
    });
  });
});
