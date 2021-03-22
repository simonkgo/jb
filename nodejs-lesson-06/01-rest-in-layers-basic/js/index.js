"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./product/products-controller");
var error_middleware_1 = require("./middleware/error-middleware");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new products_controller_1.ProductsController().router);
        this.app.use(error_middleware_1.HttpErrorMiddleware);
        this.app.use(error_middleware_1.ProgrammingErrorMiddleware);
        // this.app.use(Forbidden);
        // this.app.use(BadReq);
        // this.app.use(Forbidden);
        this.app.listen(3005, function () { console.log("listening on port 3005 just checking"); });
    };
    ;
    return Server;
}());
exports.default = Server;
new Server();
