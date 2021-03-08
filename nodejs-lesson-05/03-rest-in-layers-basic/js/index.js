"use strict";
// npm i express, @types/express
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./products/products-controller");
var Server = /** @class */ (function () {
    function Server(port) {
        var _this = this;
        this.activate = function () {
            _this.app = express();
            _this.app.use(express.json());
            _this.app.use("/api/v1", new products_controller_1.ProductsController().router);
            _this.app.listen(_this.port, function () { console.log("listening on http://localhost:" + _this.port); });
        };
        this.activate();
        this.port = port;
    }
    return Server;
}());
exports.default = Server;
new Server(3003);
