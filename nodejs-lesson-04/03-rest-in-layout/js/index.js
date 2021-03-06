"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.listen(3000, function () { return console.log('Server Runing'); });
    };
    return Server;
}());
exports.Server = Server;
new Server();
