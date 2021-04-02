var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index.controller'); 

/* GET home page. */
router.get('/', index_controller.home);
router.get('/about', index_controller.about);
router.get('/contact', index_controller.contact);
router.get('/list', index_controller.list);



module.exports = router;
