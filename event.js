var event=require('events');

var eventEmitter= new event.EventEmitter();

var student =function(name){
	this.name= name;
}
var ris=new student('rishabh');

eventEmitter.on('click',function(){
	console.log("the name of sudent is " + ris.name )
});
eventEmitter.emit('click');
