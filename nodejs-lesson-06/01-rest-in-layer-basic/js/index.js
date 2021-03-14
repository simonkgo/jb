"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_controller_1 = require("./products/product-controller");
var employees_controller_1 = require("./employees/employees-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/api/v1', new product_controller_1.ProductControler().router);
        this.app.use('/api/v1', new employees_controller_1.EmployeeController().router);
        this.app.listen(3002, function () { return console.log('server is listen in port 3001'); });
    };
    return Server;
}());
exports.default = Server;
new Server();
