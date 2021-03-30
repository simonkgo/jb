const express = require("express");
const productsController = require("./product/product-controller");

//express server;
//---;
const server = express(); 

//middleware;
//---;
server.use(express.json());

//routes;
//---;
server.use("/api/v1/products", productsController);

//server listen;
//---;
server.listen(3000, () => console.log("Listening..."));

//default route;
//---;
server.use("*", (req, res) => {
    req.status(404).send("Route not found");
});
