"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./products/products-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app.use(express.json());
        this.app.use('api/v1', new products_controller_1.ProductsController().router);
        this.app.listen(3000, function () { return console.log('listen on port 3000'); });
    }
    return Server;
}());
exports.default = Server;
new Server();
