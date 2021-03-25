/* -------------------------------------------------------------------------- */
/*                    CORS - Cross Origin Resources Sharing                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               CORS - Problem                               */
/* -------------------------------------------------------------------------- */

const express = require("express");

const products = [
  { id: 1, name: "Moishe Ufnik" },
  { id: 2, name: "Kipi Ben Kipod" },
];

const main = () => {
  const app = express();
  app.get("/api/v1/users", (req, res) => {
    res.json(products);
  });
  app.listen(3000, () => {
    console.log("On Port 3000");
  });
};
main();
