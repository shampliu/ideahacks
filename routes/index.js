var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/main', function(req, res, next) {

	// var body;

	// var url = "http://192.168.1.148/";

	// request(url, function(err, resp, body) {
	//  console.log(body);
	// });

	res.render('main');
});



module.exports = router;
