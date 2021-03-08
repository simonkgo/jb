"use strict";
/*
    recap
    controller  - מראה את סוגי האייפי איי כרגע רק רסט בעתיד יכול להיות דברים נוספים
    service     - מכיל את הלוגיקה של האפליקציה ושם רוב העבודה
    respository - מחובר לקבצים במקרה שלנו בעתיד לדאטה בייס והתפקיד זה לקבל לקרוא מהקובץ או לכתוב אליו וזהו
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./products/products-controller");
var Server = /** @class */ (function () {
    function Server() {
        this.activate();
    }
    ;
    Server.prototype.activate = function () {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new products_controller_1.ProductsController().router); // /api/v1/products
        this.app.listen(3000, function () { return console.log("listen on port 3000"); });
    };
    ;
    return Server;
}());
exports.default = Server;
;
new Server();
