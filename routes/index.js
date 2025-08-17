
var express = require('express');
var router = express.Router();

// Middleware to add user info to all views
router.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travlr Getaways' });
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About - Travlr Getaways' });
});

// GET contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Travlr Getaways' });
});

// GET travel page
router.get('/travel', function(req, res, next) {
  res.render('travel', { title: 'Travel - Travlr Getaways' });
});

// GET rooms page
router.get('/rooms', function(req, res, next) {
  res.render('rooms', { title: 'Rooms - Travlr Getaways' });
});

// GET meals page
router.get('/meals', function(req, res, next) {
  res.render('meals', { title: 'Meals - Travlr Getaways' });
});

// GET news page
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News - Travlr Getaways' });
});

module.exports = router;
