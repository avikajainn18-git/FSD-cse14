/*Asynchronous calls using timer:
1) set TIMEOUT
) Set setImmediate
3) process.nextTick
4) setInterval 
5) Promise (async/await)
*/
import fs from "fs/promises";
const writeData = async() => {
    try {
        console.log("file about to wirte...")
        await fs.writeFile('stud.txt', "Name: Raman Singhal");
        console.log("file written");
    } catch (error) {
        console.log(error);
    }
}
const f1 = () => {
    console.log("f1");
};
const f2 = () => {
    console.log("f2");
};
const f3 = () => {
    console.log("f3");
};
const main = () => {
    console.log("main");
    setTimeout(f1, 0);
    // setInterval(f2,1000);
    setImmediate(f2);
    process.nextTick(f3); 
    writeData(); //promise
    console.log("end");
};
main();