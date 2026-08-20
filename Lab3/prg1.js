import http from "http";

const server = http.createServer((req, res) => {
    console.log("Welcome to Node js.")
    console.log("Request Method:");
    
    console.log(req.method);
    console.log("Request Headers");
    console.log(req.headers);
    console.log("Socket Info");
    //console.log(req.socket);
        
    res.end("hello")
})

const PORT = 4444;

server.listen(PORT, () => console.log("Sever is running..."));
 