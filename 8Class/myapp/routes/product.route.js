const express=require('express');
const router=express.Router();

const product_controller=require('../controllers/product.controller');

router.get('/list',product_controller.product_list);  //http://localhost:3000/products/list

router.get('/createform',product_controller.product_formcreate); //load the insert form
router.post('/create',product_controller.product_create); //this will perform insert operation.

router.post('/:id/delete',product_controller.product_delete);

router.post('/updateform/:id',product_controller.product_updateform); //used to get the updateform
router.post('/:id/update',product_controller.product_update); //used to perform the update operation
//http://localhost:3000/products/objectID/update

module.exports=router;