var express = require('express');
var route = express.Router();


// define the home page router

// Crud opperation for API
route.get('/', (req,res)=>{res.send("retrive all books")})

route.post('/',(req,res)=>{res.send("Post a book")})

route.put('/',(req,res)=>{res.send("Put a book")})

route.delete('/',(req,res)=>{res.send("Delete a book")})
// ---------------------------------------------------


module.exports = route;