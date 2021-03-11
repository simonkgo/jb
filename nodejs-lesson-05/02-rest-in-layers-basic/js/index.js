"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./product/products-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new products_controller_1.ProductsController().router);
        this.app.listen(3000, function () { console.log("listening on port 3000 just checking"); });
    };
    ;
    return Server;
}());
exports.default = Server;
new Server();
