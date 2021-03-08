const { request, response } = require("express");
const express = require("express");
const app = express();

/* -------------------------------------------------------------------------- */
/*                                 MiddleWares                                */
/* -------------------------------------------------------------------------- */

// const exampleFunc = (request, response) => {
//   console.log("example:", Date.now());
//   response.json("ok");
//   //   next();
// };

// const exampleFunc2 = (request, response) => {
//   console.log("example:", Date.now());
//   response.json("ok");
//   //   next();
// };

// app.use(exampleFunc);
// app.use("/api/example1", exampleFunc2);

// app.listen("3000", () => {
//   console.log("Server On , Port-3000");
// });

////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                                  example 2                                 */
/* -------------------------------------------------------------------------- */

// const example2Func = (request, response, next) => {
//   console.log("example2:", Date.now());
//   next();
// };

// app.use("/api/example2", example2Func);
// app.get("/api/example2", example2Func);
// app.post("/api/example2", example2Func);

// app.listen(3000, () => {
//   console.log("Server On , Port-3000");
// });

///////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                                  example 3                                 */
/* -------------------------------------------------------------------------- */

// const example3Func1 = (request, response, next) => {
//   console.log("example3 fun1 :");
//   next();
// };
// const example3Func2 = (request, response, next) => {
//   console.log("example2 fun 2:");
//   next();
// };

// app.get("/api/example3", [example3Func1, example3Func2]);

// app.listen(3000, () => {});

///////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                                  example 4                                 */
/* -------------------------------------------------------------------------- */

// const example4Func1 = (request, response, next) => {
//   console.log("example4 fun1 :");
//   next();
// };
// const example4Func2 = (request, response, next) => {
//   console.log("example4 fun2 :");
//   next();
// };

// app.get("/api/example4", example4Func1);
// app.get("/api/example4", example4Func2);

// app.listen(3000, () => {});

//////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                          Router-level middleware:                          */
/* -------------------------------------------------------------------------- */

// const usersFunc = (request, response, next) => {
//   console.log("Users");
//   response.json(200);
// };

// const messagesFunc = (request, response, next) => {
//   console.log("Messages");
//   response.json(200);
// };

// const routerUsers = express.Router();
// const routerMessages = express.Router();

// routerUsers.use("/users", usersFunc);
// routerMessages.use("/messages", messagesFunc);

// app.use("/api", routerUsers);
// app.use("/api", routerMessages);

// app.listen(3000, () => {
//   console.log("Listening in Port 3000");
// });

///////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------- */
/*                             Build-in middleware                            */
/* -------------------------------------------------------------------------- */

const morgan = require("morgan");

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(morgan("dev"));
app.use(limiter);

app.listen(3000, () => {});
