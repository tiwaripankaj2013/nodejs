const path = require('path');
const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-product',(req,res,next) =>{
    console.log('midlle ware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// /admin/add-product => POST
router.post('/admin/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;