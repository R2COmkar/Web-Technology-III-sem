var events=require('events');
var em=new events.EventEmitter();


var listen1=function listener1()
{
    console.log('First listerer is called>>>>>');
}

var listen2=function listener2()
{
    console.log('second listerer is called>>>>>');

}

em.on('connection 1',listen1);
em.addListener('connection 1',listen2);

em.emit("connection 1")


