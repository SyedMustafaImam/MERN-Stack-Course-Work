var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'Home', menueid:'home' });
});

module.exports = router;
