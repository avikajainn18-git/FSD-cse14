import {EventEmitter} from 'node:events'
const task=new EventEmitter();

const sayHi=(name)=>{
    console.log(`Logged-in ${name}`);
};

task.on('greet', sayHi);
task.on("greet",()=> {
        console.log("Logged Out");

});
task.once("greet",()=> {
    console.log("Systrem restarting...");
});
task.emit("exit",()=>{
    console.log(`System is shutting down`);
});

task.emit('greet', 'avika jain');
task.emit('greet', 'rahul singh');
task.emit('greet', 'sonia singh');
task.emit("greet", "Manager");