var fs=require('fs')
var data="We are learning Buffers and Streams"
var ws=fs.createWriteStream('demo.txt');
 ws.write(data,'UTF-8');
 ws.end();

 ws.on('finish',function(){
    console.log('Write Completed');
 })

ws.on('error',function(err){
    console.log(error.stack);
})

console.log('Program Ended')