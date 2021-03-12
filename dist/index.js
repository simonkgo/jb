"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var employee_router_1 = __importDefault(require("./employee-router"));
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.createServer = function () {
        if (!this.app) {
            this.buildServer();
        }
        else {
            return this.app;
        }
    };
    Server.buildServer = function () {
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.app.use(employee_router_1.default.employeeRouting());
        this.app.listen(4000, function () { return console.log("server work at port 4000"); });
    };
    return Server;
}());
Server.createServer();
