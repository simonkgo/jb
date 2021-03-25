/* -------------------------------------------------------------------------- */
/*                    CORS - Cross Origin Resources Sharing                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               CORS - Solution                               */
/* -------------------------------------------------------------------------- */

const express = require("express");
const cors = require("cors");
const products = [
  { id: 1, name: "Moishe Ufnik" },
  { id: 2, name: "Kipi Ben Kipod" },
];

const main = () => {
  const app = express();

  //CORS enable all
  // app.use(cors());
  //Configure CORS policies
  const corsOptions = {
    origin: "http://127.0.0.1:5500",
  };
  //CORS enable only for one origin
  // app.use(cors(corsOptions));
  app.get("/api/v1/single", cors(corsOptions), (req, res, next) => {
    res.json("Enable for single route");
  });
  app.get("/api/v1/users", (req, res) => {
    res.json(products);
  });
  app.listen(3000, () => {
    console.log("On Port 3000");
  });
};
main();
