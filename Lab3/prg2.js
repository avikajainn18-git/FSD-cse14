import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(404, {
    "content-type": "text/plain",
  });
  res.end("<h1>Welcome to server</h1>");
});

server.listen(4444, () => console.log("Sever is running..."));
