const express = require('express');
const router = express.Router();
const path = require('path');
const products = [];


router.use('/product',(req,res,next) =>{
    res.send('<form action ="/product" method = "POST"><input type = "text" name ="message"> <button type = "submit" >send</button></form>');
})

router.use('/add-product',(req,res,next)=>{
    products.push({title : req.body});
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})

exports.routes = router;
exports.products = products;
