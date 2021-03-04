<<<<<<< HEAD
const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((request, response) => {
  console.log("URL : ", request.url);
  response.end("Hi from server 02");
});

server.listen(port, hostname, () => {
  console.log("Server listening for port :", port);
=======
const http = require('http');

const server = http.createServer((request, response) => {
    console.log("request url", request.url);
    console.log("request method", request.method);
    console.log("request header", request.headers);

    response.statusCode = 200;
    response.end("Hi from server 2 :)");
});

server.listen(3001, "127.0.0.1", () => {
    console.log(`Server is listening on port 3001`);
>>>>>>> d1097cd36ed93cf3ce7861b930182c83287d745a
});
