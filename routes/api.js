var express = require('express');
var router = express.Router();

var newsService = require('../services/newsService');

// GET /api/news
router.get('/news', function(req, res) {
  newsService.getAllNews((err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch news' });
    }
    res.json(rows);
  });
});

// POST /api/news
router.post('/news', function(req, res) {
  newsService.addNews(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add news' });
    }
    res.status(201).json(result);
  });
});

// PUT /api/news/:id
router.put('/news/:id', function(req, res) {
  newsService.updateNews(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update news' });
    }
    res.json(result);
  });
});

// DELETE /api/news/:id
router.delete('/news/:id', function(req, res) {
  newsService.deleteNews(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete news' });
    }
    res.json(result);
  });
});

module.exports = router;
