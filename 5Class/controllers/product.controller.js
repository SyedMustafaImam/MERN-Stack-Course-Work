const Product = require('../models/product.model')

exports.test=(req,res)=>{
    res.send('Greetings form test controller')
}
exports.product_create = (req,res)=>{
    res.send('we are in the create product end point');
    let product = new Product({
     name: req.body.name,
     price: req.body.price   
    });

    product.save();
}

exports.product_retrive = (req,res)=>{
   
}
exports.product_update = (req,res)=>{
     Product.findByIdAndUpdate(req.params.id,{$set: req.body}, (err, product)=>{
    if(err) return next(err);
    res.send('Product updated')
});}
exports.product_dele = (req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{if (err) return next(err)})
}
