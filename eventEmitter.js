const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet',(name) => { //formal parameter (name) passed during declaration // event listener(on) - 
    console.log(`Hello ${name}! Welcome to Node.js!`);
});

myEmitter.on('exit',() => {
    console.log("Application closed.");
});

myEmitter.emit('greet','2nd year CSE(DS) student'); //actual parameter passed (2nd year CSE(DS) student) passed during calling
myEmitter.emit('exit');
