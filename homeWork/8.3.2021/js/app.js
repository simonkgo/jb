"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express = require("express");
var User = /** @class */ (function () {
    function User(id, firstName, lastName, department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    return User;
}());
var mikel = new User("1", "Mikel", "Bugayets", "Inspector");
var anna = new User("2", "Anna", "Bugayets", "Call Center");
var thomas = new User("3", "Thomas", "Bugayets", "Destroying our House");
var users = [mikel, anna, thomas];
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.listen("3000", function () { console.log("Server on and Listening on port 3000"); });
        this.app.get("/api/v1/users", function (request, response) {
            response.json(users);
        });
        this.app.get("/api/v1/users/:id", function (request, response) {
            var id = request.params.id;
            var currentUser = users.findIndex(function (user) { return user.id === id; });
            response.json(users[currentUser]);
        });
        this.app.post("/api/v1/users", function (request, response) {
            var newUser = request.body;
            users.push(newUser);
            response.json(users);
        });
        this.app.put("/api/v1/users/:id", function (request, response) {
            var id = request.params.id;
            var currentUser = users.findIndex(function (user) { return user.id === id; });
            var correctedUser = request.body;
            users[currentUser] = correctedUser;
            response.json(users);
        });
        this.app.delete("/api/v1/users/:id", function (request, response) {
            var id = request.params.id;
            var currentUser = users.findIndex(function (user) { return user.id === id; });
            users.splice(currentUser, 1);
            response.json(users);
        });
    };
    return Server;
}());
exports.Server = Server;
new Server();
