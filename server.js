const express=require('express');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
const User=require('./models/login');
const fruitsRouter=require('./routes/fruits');

app.use(express.json());
app.set('view engine','ejs');
//  app.set("views",path.join(__dirname,"./"))


app.use(express.static('public'));
 app.use(express.urlencoded({extended:false}))



app.get("/", (req,res)=>{
    res.render('login');
 })
 app.get('/index',(req,res)=>{
    res.render('index');
 })
 app.post("/login",async (req,res)=>{
    try{
    let user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    await User.insertMany([user]);
   res.redirect("/index");
}catch(e){
    console.log(e);
    res.redirect("/login");
}

})
app.use('/pages',fruitsRouter);

app.listen(3000,()=>{
    console.log("listening to server 3000");
})