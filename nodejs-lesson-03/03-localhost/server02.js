const http = require("http");
const hostname = "127.0.0.1";
const port = 3006;

const server = http.createServer((request, response)=>{
    console.log("request url: ",request.url);
    console.log("request method: ",request.method);
    console.log("request headers: ",request.headers);
    response.statusCode = 200;
    response.end("Hi from server 02");
})

server.listen(port, hostname, ()=>{
    console.log(`server is listening on port ${port}`);
})