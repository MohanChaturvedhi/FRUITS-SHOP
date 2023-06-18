const express=require('express');
const app=express();
const router=express.Router();
const User=require('../models/login');

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/items',(req,res)=>{
    res.render('pages/items');
})
router.get('/orders',(req,res)=>{
    res.render('pages/orders');
})

router.get('/cart',(req,res)=>{
    res.render('pages/cart');
})
router.get('/about',(req,res)=>{
    res.render('pages/about');
})



module.exports=router;