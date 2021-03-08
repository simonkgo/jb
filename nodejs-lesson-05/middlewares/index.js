const express = require("express");
const app = express();

//Application-level middelware 
const example1func = (request,response, next) =>{
    console.log("example1:", Date.now());
    next();
};
// app.use(example1func);

app.use("/api/example1",example1func);

const example2func = (request,response, next) =>{
    console.log("example2:", Date.now());
    next();
    response.json("ok");
};

app.use("/api/example2",example2func);
app.get("/api/example2",example2func);
app.post("/api/example2",example2func);


const example3func1 = (request,response, next) =>{
    console.log("example3func1");
    next();
};

const example3func2 = (request,response, next) =>{
    console.log("example3func2");
    next();
};
app.get("/api/example3", [example3func1,example3func2])

// app.use(example1func);

const example4func1 = (request,response, next) =>{
    console.log("example4func1");
    next();
};

const example4func2 = (request,response, next) =>{
    console.log("example4func2");
    response.json("ok");
    next();
};
app.get("/api/example4", example4func1)
app.get("/api/example4", example4func2)

app.listen(3001, () => console.log("Listening on port 3001..."));


//router middelware
const userFunc = (request, response, next) => {
    console.log("users");
};
const messageFunc = (request, response, next) => {
    console.log("messages");
};

const routerUsers = express.Router();
const routerMessages = express.Router();

routerUsers.use("/users",userFunc);
routerMessages.use("/message",messageFunc);

app.use("/api", routerUsers);
app.use("/api", routerMessages);


//morgan Third-party middleware
var morgan = require("morgan");
app.use(morgan("dev"));


//express-rate-limit Third-party middleware
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use("/api/books",limiter);

app.listen(3000, () => console.log("Listening on port 3000..."));
