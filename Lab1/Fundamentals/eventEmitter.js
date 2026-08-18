import { EventEmitter } from "node:events";
const task = new EventEmitter();

const sayHi = (name) => { 
  console.log(`Logged-in as ${name}`);
};
task.once("greet", () => {
  console.log("Systrem starting...");
});

task.on("greet", sayHi);

task.on("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet", (name) => {
  console.log(`${name} logged out \n`);
});

task.once("exit", (name) => {
  console.log(`System is shutting down by ${name}`);
});

task.emit("greet", "avika jain");
task.off("greet", sayHi);
task.emit("greet", "rahul singh");
task.emit("greet", "sonia sinha");
task.emit("exit", "Manager");
task.emit("exit", "Employee"); //wont execute
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");
