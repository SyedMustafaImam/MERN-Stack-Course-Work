const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const product_controller = require('../controllers/product.controller')

router.get('/test',product_controller.test);
router.post('/create',product_controller.product_create);
router.put('/:id/update', product_controller.product_update);

module.exports = router;
