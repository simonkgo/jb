const express = require("express");
const productsController = require("./product/product-controller")

const app = express();

app.use(express.json());

app.use("/api/v1/products", productsController);

app.listen(3000, ()=> console.log("listening on port 3000"));
