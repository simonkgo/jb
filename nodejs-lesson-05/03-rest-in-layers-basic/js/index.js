"use strict";
/*
    ?מה בונים
    שרת רסט עם אסקפרס ושכבות
    שמקבל בקשות מקליינט
    ומעדכן את האובייקט של המוצרים בהתאם לחוקים של רסט
    משמע - get/put/post/delete/patch
    ושלחיה לנתיב המתאים
    get     /products     בקשה לקבל את רשימת כל המוצרים
    post    /products    הוספה של מוצר חדש
    put     /products/:id עדכון כל המוצר
    patch   /products/:id עדכון של חלק מהמוצר
    delete  /products/:id מחיקה של המוצר

    controller  - מראה את סוגי האייפי איי כרגע רק רסט בעתיד יכול להיות דברים נוספים
    service     - מכיל את הלוגיקה של האפליקציה ושם רוב העבודה
    respository - מחובר לקבצים במקרה שלנו בעתיד לדאטה בייס והתפקיד זה לקבל לקרוא מהקובץ או לכתוב אליו וזהו

    ?מה יש לנו
    database
    products.json - קובץ שמכיל מערך של מוצרים

    products תיקיה של
    product.ts - האובייקט עצמו שנשתשמ בו כטייפ ובהמשך נוסיף ולידציה
    product-controller.ts - יבנה את הנתיבים ויפעיל פונקציה מתאימה
    product-service.ts - יעשה את רוב העבודה של עדכונים הוספות וכו
    product-repository.ts - products.json כותב וקורא מקובץ

    index.ts - products קובץ ראשי שנפעיל אותו והוא יאתחל את אקספרס ויחבר את

    tsconfig.ts - אחראי על הגדרות של טייפסקריפט
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var products_controller_1 = require("./products/products-controller");
var employees_controller_1 = require("./employees/employees-controller");
var MyGreateRestAPIServer = /** @class */ (function () {
    //הבנאי - ירוץ ראשון כאשר נאתחל את הקלאס הראשי של האפליקציה;
    //---;
    function MyGreateRestAPIServer() {
        this.activate();
    }
    ;
    //פונקציה שהבנאי יריץ;
    //---;
    MyGreateRestAPIServer.prototype.activate = function () {
        //איתחול של אספרס והצבתו במאפיין;
        this.app = express();
        //רושים של מידלוור כללי שמאפשר שליחה של גייסון בגוף הבקשות;
        this.app.use(express.json());
        //רישום הנתיבים של המוצרים לכתובת הבאה;
        this.app.use("/api/v1", new products_controller_1.ProductsController().router); // /api/v1/products
        this.app.use("/api/v1", new employees_controller_1.EmployeesController().router); // /api/v1/message
        //פונקציה שתתחבר לפורט ותאפשר לקליינטים לפנות תוכנת שרת שאנחנו בונים;        
        this.app.listen(3000, function () { return console.log("listen on port 3000"); });
    };
    ;
    return MyGreateRestAPIServer;
}());
exports.default = MyGreateRestAPIServer;
;
//בשביל לאתחל את קלאס השרת new שימוש במילה;
new MyGreateRestAPIServer();
