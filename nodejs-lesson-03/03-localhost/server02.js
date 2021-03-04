const http = require('http');
const hostname = "127.0.0.1";
const port = "3001";

const server = http.createServer((request,response)=>{
    console.log("request url", request.url);
    console.log("request method", request.method);
    console.log("request headers", request.headers);
    response.statusCode = 200;
    response.end("hi server :) this is server 02!")
})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})
