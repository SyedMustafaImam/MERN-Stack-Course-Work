var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/product.controller');


router.get('/list', product_controller.list);
router.get('/createform', product_controller.formcreate);
router.post('/create', product_controller.create);
router.put('/update', product_controller.update);
router.post('/delete', product_controller.delete);

module.exports = router;
