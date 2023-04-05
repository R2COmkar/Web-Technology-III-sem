//Buffer concept 


const buf1=Buffer.alloc(13,'Hello Welcome')
const buf2=Buffer.alloc(17,'To PES university');

console.log("Buffer1",buf1.toString());
console.log("Buffer2",buf2.toString());

const totalength=buf1.length + buf2.length;
console.log(totalength);

const buf3=Buffer.concat([buf1, buf2]);
console.log(buf3.toString());              //toString function is used to convert into string output 
console.log(buf3.length);
