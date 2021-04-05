const express = require("express");
const productsController = require("./product/product-controller");

//Express Server;
//---;
const app = express();

//Middleware;
//---;
app.use(express.json());

//Routes;
//---;
app.use("/api/v1/products", productsController);

//Server Listen;
//---;
app.listen(3000, () => console.log("Listening on port 3000"));

//product.repository; 