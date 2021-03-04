"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.listen("3000", function () { console.log("Server listening on port 3000"); });
    };
    return Server;
}());
exports.Server = Server;
new Server();
