const express = require("express");

// const routeRecap = () => {
//   const app = express();
//   app.get("/api/v1/products", (req, res, next) => {
//     res.json("yey");
//   });
//   app.listen(3000, () => {
//     console.log("Server on port 3000");
//   });
// };

// // routeRecap();

/* -------------------------------------------------------------------------- */
/*                                 Middleware                                 */
/* -------------------------------------------------------------------------- */

// const middlewareRecap1 = () => {
//   const app = express();

//   app.use((req, res, next) => {
//     console.log("First Step: Middleware");
//     next();
//   });

//   app.get("/api/v1/products", (req, res, next) => {
//     console.log("Second Step: Route - /api/v1/products");
//     res.json("yey");
//   });

//   app.listen(3000, () => console.log("Listen on ports 3000"));
// };

/* -------------------------------------------------------------------------- */
/*                         Middkeware with 3 arguments                        */
/* -------------------------------------------------------------------------- */

// // middlewareRecap1();

// const middlewareRecap2 = () => {
//   const app = express();

//   app.get("/api/v1/products", (req, res, next) => {
//     console.log("First Step: Route - /api/v1/products");
//     res.json("yey");
//     next();
//   });

//   app.use((req, res, next) => {
//     console.log("Second Step: Middleware");
//   });

//   app.listen(3000, () => console.log("Listen on ports 3000"));
// };


/* -------------------------------------------------------------------------- */
/*                         Middleware with 4 arguments                        */
/* -------------------------------------------------------------------------- */

// // middlewareRecap2();

// const middlewareRecap3 = () => {
//   const app = express();

//   app.get("/api/v1/products", (req, res, next) => {
//     console.log("First Stop: route /api/v1/products");
//     next("Oppso...");
//     // next();
//   });

//   //התחנה השניה של הבקשה;
//   app.use((err, req, res, next) => {
//     console.log("Second Stop: middleware with 3 arguments");
//     console.log(err);
//     res.json("Finish");
//   });

//   app.listen(3000, () => console.log("Listening..."));
// };

// // middlewareRecap3();
