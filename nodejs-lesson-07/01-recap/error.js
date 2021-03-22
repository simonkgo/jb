/* -------------------------------------------------------------------------- */
/*                                    Error                                   */
/* -------------------------------------------------------------------------- */

// const main = () => {
//   const myError = new Error("Oppsi");
//   console.log(myError.name);
//   console.log(myError.message);
//   console.log(myError.stack);
// };
// main();

const express = require("express");

const server = () => {
  const app = express();

  app.get("/api/v1/products", (req, res, next) => {
    const myError = new Error("Alert");
    console.log("Get /Products");
    next(myError);
  });
  app.use((err, req, res, next) => {
    console.log("Middleware");
    const error = {
      name: err.name,
      message: err.message,
    };
    res.status(400).json({ error });
  });

  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
};

server();
