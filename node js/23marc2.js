var buf=Buffer.from('pes university');
buf.write('Bengaluru',5);
console.log(buf.toString());


// Module:Validator

var val=require('validator')

var email='xyz@gmail.com'
console.log(val.isEmail(email))

email='xyz@.edu'
console.log(val.isEmail(email))

var name='Omkar'
console.log(val.isLowercase(name))
