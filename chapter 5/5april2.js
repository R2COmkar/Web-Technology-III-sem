//Express Middel ware 

var express=require('express')
var app=express();

app.use("/",function(req,res,next){
    console.log("First MW function");
    next();
})

app.use("/",function(req,res,next){
    console.log("Route MW function 1");
    next();
})

app.use("/",function(req,res,next){
    console.log("Route MW function 2");
    next();
})

app.get("/",function(req,res,next){
    console.log("Route MW function ");
    res.send("Welcome to my WEB Page");
    next();
})

app.use("/",function(req,res,next){
    console.log("Route MW function 3");
    next();
})
app.use("/",function(req,res,next){
    console.log("Last MW function");
    next();
})

app.listen(3000,function(){
    console.log("Server Running");
})