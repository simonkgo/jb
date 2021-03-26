"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var employee_router_1 = __importDefault(require("./employee-router"));
var error_middelware_1 = require("./error-middelware/error-middelware");
var employee_request_save_1 = __importDefault(require("./middelware/employee-request-save"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
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
        this.app.use(employee_request_save_1.default);
        this.app.use(express_fileupload_1.default());
        this.app.use(employee_router_1.default.employeeRouting(), error_middelware_1.httpMiddelwareError);
        this.app.use(function (req, res) {
            return res.status(404).json({ errors: "page not found" });
        });
        this.app.listen(4000, function () { return console.log("server work at port 4000"); });
    };
    return Server;
}());
Server.createServer();
