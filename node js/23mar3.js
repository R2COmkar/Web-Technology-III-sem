var fs=require('fs')
var item='';

var rs=fs.createReadStream('demo.txt');
rs.setEncoding('UTF-8');

rs.on('data',function(chunk){
    item+=chunk;
});

rs.on('end',function(chunk){
    console.log(item);
})

rs.on('err',(chunk)=>{
    console.log(err.stack);
})