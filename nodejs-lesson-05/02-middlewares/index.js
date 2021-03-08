const { response } = require("express");
const express = require("express");
const app = express();

const exampleFunc1 = (request, response, next) => {
    console.log("example1: ", Date.now());
    next();
}

const exampleFunc2 = (request, response, next) => {
    console.log("example2: ", Date.now());
    next();
}
const example2Func1 = (request, response, next) => {
    console.log("example41: ", Date.now());
    response.json("ok");
    next();
}
const example2Func2 = (request, response, next) => {
    console.log("example42: ", Date.now());
    next();
}
app.use("/api/example1", exampleFunc1);
app.use(exampleFunc1);
app.use("/api/example2", exampleFunc2);
app.get("/api/example2", exampleFunc2);
app.get("/api/example3", [exampleFunc1,exampleFunc2]);
app.get("/api/example4", example2Func1);
app.get("/api/example4", example2Func2);


const userFunc = (req, res, next) => {
    console.log("users");
    next();
}
const msgFunc = (req, res, next) => {
    console.log("message");
    next();
}

const routerUsers = express.Router();
const routerMessages = express.Router();

routerUsers.use("/users", userFunc);
routerMessages.use("/messages", msgFunc);

app.use("/api", routerUsers)
app.use("/api", routerMessages)



//??????????????

var morgan = require('morgan');
app.use(morgan('dev'));
// app.use(morgan('combined'));
// npm i express-rate-limit
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100
})
app.use(limiter);
app.listen(3002, ()=>{console.log("http://localhost:3002/api/example3")})