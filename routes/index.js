var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/main2', function(req, res, next) {
  res.render('main2');
});

router.get('/main3', function(req, res, next) {
  res.render('main3');
});

router.get('/main4', function(req, res, next) {
  res.render('main4');
});

module.exports = router;
