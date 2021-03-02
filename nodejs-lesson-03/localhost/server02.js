const http = require('http');
const { Server } = require('tls');
const hostName = '127.0.0.1';
const port = 3001;

const server = http.createServer((request,response) => {
   
    response.statusCode = 200;
    response.end('Hello from server 2')

})
server.listen(port,hostName,()=>{
    console.log(`server is listening on port ${port}`);
})