//Create Your own server with own Port number

var url=require('url');
var http=require('http');
var fs=require('fs');


http.createServer(function (request,response){
    response.writeHead(200,{'Context-type':'text/plain'});
    response.end("Welcome to Web Server!!!! ");
}).listen(7070);

console.log("Server is up and runnning on http://localhost:7070");