"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./products/products-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.listen(3000, function () { console.log("Listen on port 3000"); });
        this.app.use("/api/v1", new products_controller_1.ProductsController().router);
    };
    return Server;
}());
exports.default = Server;
new Server();
