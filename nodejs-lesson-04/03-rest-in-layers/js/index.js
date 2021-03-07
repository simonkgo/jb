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
var users = [
    { id: 1, firstName: "shai", lastName: "eliav", department: "admin" },
    { id: 2, firstName: "ben", lastName: "oz", department: "books" }
];
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
        this.app.get("/api/v1/users", function (request, response) {
            response.json(users);
        });
        this.app.get("/api/v1/users/:id", function (request, response) {
            var id = +request.params.id;
            var user = users.find(function (user) { return user.id === id; });
            response.json(user);
        });
        this.app.post("/api/v1/users", function (request, response) {
            var user = request.body;
            var newId = 1;
            var verifyId = function () {
                var isUserExist = users.find(function (user) { return user.id === newId; });
                if (!isUserExist) {
                    return;
                }
                newId++;
                verifyId();
            };
            verifyId();
            user.id = newId;
            users.push(user);
            response.json(users);
        });
        this.app.put("/api/v1/users/:id", function (request, response) {
            var id = +request.params.id;
            var user = users.find(function (user) { return user.id === id; });
            var update = request.body;
            if (user) {
                user.department = update.department;
                user.firstName = update.firstName;
                user.lastName = update.lastName;
            }
            response.json(user);
        });
        this.app.patch("/api/v1/users/:id", function (request, response) {
            var id = +request.params.id;
            var user = users.find(function (user) { return user.id === id; });
            var update = request.body;
            if (user) {
                update.department ? user.department = update.department : null;
                update.firstName ? user.firstName = update.firstName : null;
                update.lastName ? user.lastName = update.lastName : null;
            }
            response.json(user);
        });
        this.app.delete("/api/v1/users/:id", function (request, response) {
            var id = +request.params.id;
            var user = users.find(function (user) { return user.id === id; });
            if (user) {
                var indexToRemove = users.indexOf(user);
                users.splice(indexToRemove, 1);
            }
            response.json(users);
        });
        this.app.listen(this.port, function () {
            console.log("listening on http://127.0.0.1:" + _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;
new Server();
