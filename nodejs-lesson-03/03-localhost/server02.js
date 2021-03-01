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
});
