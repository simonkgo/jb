"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var error_middleware_1 = require("./middleware/error-middleware");
var products_controller_1 = require("./products/products-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new products_controller_1.ProductsController().router);
        this.app.use(error_middleware_1.httpErrorMiddleware);
        this.app.listen(3000, function () { console.log("Listen on port 3000"); });
    };
    return Server;
}());
exports.default = Server;
new Server();
