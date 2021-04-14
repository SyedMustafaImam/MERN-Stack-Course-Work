var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/product.controller');


router.get('/list', product_controller.list);
router.get('/createform', product_controller.formcreate);
router.post('/create', product_controller.create);
router.post('/:id/delete', product_controller.delete);
router.put('/updateform/:id', product_controller.update_form);
router.post('/:id/update', product_controller.update)

module.exports = router;
