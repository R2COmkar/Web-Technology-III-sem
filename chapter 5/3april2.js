//Express js Chapter 5

var express =require('express');
var app=express();

app.get('/',function (req, res){
    res.send('<h1>Hello World</h1>');
});

app.get('/about',function (req,res){
    res.send('<h1>Welcome to PES');
});

app.listen(8000,function (){
    console.log("Server Running");
});