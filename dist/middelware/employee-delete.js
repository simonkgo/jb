"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deleteEmployee = function (req, res, next) {
    console.log("user is going to delete employee " + req.params.id);
    next();
};
exports.default = deleteEmployee;
