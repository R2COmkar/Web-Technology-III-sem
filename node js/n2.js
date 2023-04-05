//we need install fs module first



// const fs=require('fs')
// fs.readFile("test.txt",function(err,data){
//     if(err)
//     {
//         console.log(err)
//     }
//     setTimeout(()=>{
//     console.log("PES University Display after 2 seconds")},2000)
//     console.log(data)
// })
// console.log("Starts here")
const fs = require('fs');

fs.readFile("test.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
