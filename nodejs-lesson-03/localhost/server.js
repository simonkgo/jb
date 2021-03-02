const http = require('http');
const { Server } = require('tls');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response) => {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    response.statusCode = 200;
    response.end('Hello Samuel Lasmi')

})
server.listen(port,hostName,()=>{
    console.log(`server is listening on port ${port}`);
})