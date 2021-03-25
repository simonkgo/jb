/*
    Error - אובייקט שגיאה גלובלי
    ?איך מאתחלים
    const myError = new Error("Ooopsi");
    ?מה מקבלים
    myError.name     - שם השגיאה;
    myError.stack    - מידע מפרוט יותר על השגיאה;
    myError.message  - הודעה השגיאה במקרה הזה ״אופסי״;
    name/message - בדרך כלל מה שמחזירים ללקוח זה אם ה;
    stack - לשמור לוגים ולמחקר מאוחר יותר משתמשים ב;
 */

// const main = () => {
//     const myError = new Error("Opps")
//     console.log("1 - Error Name:", myError.name);
//     console.log("2 - Error Message:", myError.message);
//     console.log("3 - Error Stack:", myError.stack);
// };
// main()

const express = require("express");
const task = () => {
    const app = express();

    // Route:
    app.get("/api/v1/products", (req, res, next) => {
        const myError = new Error("My Great Error");
        next(myError);
    });

    // Middleware:
    app.use((err,req, res, next) => {
        const error1 = {
            name: err.name,
            message: err.message
        };
        // res.status(400).json ({error1: error1}) //long way
        res.status(400).json ({error1}) //short way
    });

    app.listen(4000,() => console.log("Listen on port 4000"));
};
task();