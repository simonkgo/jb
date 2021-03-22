/*
    !---------------------- ?איך יוצרים ראוט  ----------------------!
    app.get("/api/v1/products", (req, res, next) => {
       return products
    });
    app.post("/api/v1/products", (req, res, next) => {
        create product
    });
    !---------------------- מידלוורים ----------------------!
    יש 2 סוגים של מידלוורים שאנחנו רושמים
    - עם 3 ארגומנטים
    - עם 4 ארגומנטים
    ויש 2 מקומות שאנחנו שמים אותם
    - מעל הנתיב
    - מתחת לנתיב
    !מיקום
    ?---------------------------------------------------------------
    *מעל הנתיב 
    :מידלוור
    app.use((req, res, next) => {
        do somthing...
        next();
    });
    :נתיב
    app.get("/api/v1/products", (req, res, next) => {
        res.json("");
    });
    *מתחת הנתיב 
    :נתיב
    app.get("/api/v1/products", (req, res, next) => {
        next();
    });
    :מידלוור
    app.use((req, res, next) => {
        do somthing...
        res.json("yey");        
    });
    ! מספר הארגומנטים
    ?---------------------------------------------------------------
    * ארגומנטים 3
     app.use((req, res, next) => {
        console.log("Second Stop: middleware with 3 arguments");
        res.json("ok");
    });
 */

const express = require("express");
const routeRecap = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        res.json("yey");
    });

    app.listen(3000, () => console.log("Listen on ports 3000"));
};
routeRecap();

const middlewareRecap1 = () => {
    const app = express();

// Middleware before route
    app.use((req,res,next) => {
        console.log("First Step: Middleware");
        next();
    });

    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Step: Route - /api/v1/products");
        res.json("yey");
    });

    app.listen(3001, () => console.log("Listen on ports 3001"));
};
middlewareRecap1();

middlewareRecap2 = () => {
    const app = express();
    // route before middleware
    app.get("/api/v1/products", (req, res, next) => {
            console.log("First Step: Route - /api/v1/products");
            next();
        });

    app.use((req, res, next) => {
        console.log("Second Step: Middleware");
        res.json("yey")
    });

    app.listen(3002, () => console.log("Listen on ports 3002"));
};
middlewareRecap2();

const middlewareRecap3 = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        console.log("First Stop: route /api/v1/products");
        // next(); //מעבר למידלוור למטה שמוגדר עם 3 ארגומנטים
        next("Oppso..."); //מעבר למידלוור למטה שמוגדר עם 4 ארגומנטים
    });

    // //מידלוור עם 3 ארומנטים;
    app.use((req, res, next) => {
        console.log("Second Stop: middleware with 3 arguments");
        res.json("ok");
    });

    //מידלוור עם 4 ארומנטים;
    app.use((err,req, res, next) => {
        console.log("Second Stop: middleware with 4 arguments");
        res.json("ok");
    });

    app.listen(3003, () => console.log("Listen on ports 3003"));
};
middlewareRecap3();




