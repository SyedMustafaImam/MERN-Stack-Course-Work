const Product = require('../models/product.model');

exports.create = (req,res)=>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('products/list')
    });
    
}

exports.formcreate = (req,res)=>{
    res.render('createform', {
        page:'New Product',
        menuId: 'CreateForm'
    })
}

exports.list= (req, res, next)=>{
    Product.find((err, product)=>{
        if(err){
            return next(err);
        }
        res.render('list', {page:'List all Products',menuId:'list', product:product})// product:product assigning the same datatype 
    });

}


exports.delete = (req, res, next)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            return next(err);
        }
        res.redirect('products/list')


    })
}


exports.update_form = (req, res, next)=>{
    Product.findById(req.params.id,(err,product)=>{
        if(err){
            return next(err);
        }
        res.rener('updateform', {menueId:'Updateform', menuId:'updateform', product:product});
    })
}   

exports.update = (req, res, next)=>{
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},(err,product)=>{
        if(err){
            return next(err);
        }
        res.redirect('products/list')
        res.rener('updateform', {menueId:'Updateform', menuId:'updateform', product:product});
    })
}   