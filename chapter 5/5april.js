//Express middelware 


var express=require('express')
var app=express();                   //"/"-Root fucntion

app.get("/",function(req,res,next){
    console.log("Route function -1");
    res.send("Welcome to my page!!!");
    next();
})

app.use("/",function(req,res,next){
    console.log("Route middelware function -2");
    next();
})

app.use(function(req,res){
    console.log("Last middelware function -3");
})

app.listen(3000,function(){
    console.log("Server running");
})