"use strict";
// client -> controller -> service -> repository
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/*
    controller
    שכבה שמחצינה את הכתובות של האפליקציה ומקבלת בקשות כדי להפעיל את השכבות האחרות בקוד

    service = (business logic)
    שימוש בפונקציות שמופעלות על ידי הקונטרולר

    repository = (date access)
    אינטראקציה עם הדאטאבייס

*/
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3001;
        this.activate();
    }
    ;
    Server.prototype.activate = function () {
        var _this = this;
        this.app = express();
        this.app.use(express.json());
        this.app.get("/", function (request, response) {
            response.json("hi");
        });
        this.app.listen(this.port, function () {
            console.log("listening on http://127.0.0.1:" + _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;
new Server();
