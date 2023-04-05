//User defined module 
//'./module.js this is user defined './' symbol

const mylib=require('./mymodule.js')

console.log(mylib.constant)

console.log("Add 5 and 10 = ",+mylib.myadd(5,10))

console.log("Difference of 10 and 5 =",+mylib.mysub(10,5))