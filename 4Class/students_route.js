var express = require('express');
var router = express.Router();


// define the home page router
router.get('/',(req,res)=>{
    res.send('Welcome the route of home page')
})


router.get('/about',(req,res)=>{
    res.send('Welcome the route of About page')
})


module.exports = router;