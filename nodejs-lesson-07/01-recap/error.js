/*
    Error - אובייקט שגיאה גלובלי
    ?איך מאתחלים
    const myError = new Error("Ooopsi");
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    ?מה מקבלים
    myError.name     - שם השגיאה;
    myError.stack    - מידע מפרוט יותר על השגיאה;
    myError.message  - הודעה השגיאה במקרה הזה ״אופסי״;
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    name/message - בדרך כלל מה שמחזירים ללקוח זה אם ה;
    stack - לשמור לוגים ולמחקר מאוחר יותר משתמשים ב;
 */

<<<<<<< HEAD
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
=======
const express = require("express");

const main = () => {
    //Error - error class - blueprint - תוכנית עבודה
    const myError = new Error("Oppsi");
    console.log("1 - Error Name:", myError.name);
    console.log("2 - Error Message:", myError.message);
    console.log("3 - Error Stack:", myError.stack);
};
//main();

//Exersice solution;
//---;
const solution = () => {
    const app = express();

    //Route;
    app.get("/api/v1/products", (req, res, next) => {
        const products = [{ id: 1, name: "iphone" }];

        const result = products.find(product => product.id = 3);
        if (!result) {
            const myError = new Error("We didnt find the product...");
            next(myError);
        };
    });

    //Middleware;
    app.use((err, req, res, next) => {
        const error = {
            name: err.name,
            message: err.message
        };
        res.status(400).json(error);
    });

    app.listen(3000, () => console.log("Listen on 3000..."));
};
//solution();
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
