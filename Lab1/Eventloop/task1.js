import { TIMEOUT } from "node:dns";

const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 stops");

}
const f2 = () => { 
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 stopd");
}
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 stops");
}
function main() {
    console.log("main starts")
    f1();
    console.log("main running");
    console.log("end main"); //this is called synchronous call or single threaded execution
}
main();
// In asynchronous, we use eventloop to manage the call stack.
// Asynchronous calls using timer:
// 1) set TIMEOUT
// 2) Set setImmediate
// 3) process.nextTick
// 4) setInterval