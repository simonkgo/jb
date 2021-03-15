"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var employees_controller_1 = require("./employees/employees-controller");
var Server = /** @class */ (function () {
    function Server(port) {
        var _this = this;
        this.activate = function () {
            _this.app = express();
            _this.app.use(express.json());
            _this.app.use("/api/v1", new employees_controller_1.EmployeesController().router);
            _this.app.listen(_this.port, function () { console.log("Listening on http://localhost:" + _this.port); });
        };
        this.port = port;
        this.activate();
    }
    return Server;
}());
exports.default = Server;
new Server(3006);
