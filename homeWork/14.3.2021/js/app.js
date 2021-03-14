"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var employees_controller_1 = require("./employees/employees-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.listen(3000, function () { console.log("Listen on port 3000"); });
        this.app.use("/api/v2", new employees_controller_1.EmployeesController().router);
    };
    return Server;
}());
exports.default = Server;
new Server();
