const express = require('express');
const bodyParser = require('body-parser');
const mongoos = require('mongoose');
const product = require('./routes/product.route')
const port = 9999;
// const mongoDb = 

const app=express();

mongoos.connect("mongodb://localhost/productsDB",{ useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("dataBase COnnected")
}).catch(err=>console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))

app.use('/products', product);


app.listen(port,()=>{console.log(`server is running ${port}`)});