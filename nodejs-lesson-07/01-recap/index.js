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

//הגדרת נתיב;
//---;
const routeRecap = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        res.json("yey");
    });

    app.listen(3000, () => console.log("Listen on ports 3000"));
};
//routeRecap();

//מידלוור מעל הנתיב;
//---;
const middlewareRecap1 = () => {
    const app = express();

    //התחנה הראשונה של הבקשה;
    app.use((req, res, next) => {
        console.log("First Step: Middleware");
        next();
    });

    //התחנה השניה של הבקשה;
    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Step: Route - /api/v1/products");
        res.json("yey");
    });

    app.listen(3001, () => console.log("Listen on ports 3001"));
};
//middlewareRecap1();

//מידלוור מתחת לנתיב;
//---;
const middlewareRecap2 = () => {
    const app = express();

    //התחנה הראשונה של הבקשה;
    app.get("/api/v1/products", (req, res, next) => {
        console.log("First Stop: route /api/v1/products");
        next();
    });

    //התחנה השניה של הבקשה;
    app.use((req, res, next) => {
        console.log("Second Stop: middleware with 3 arguments");
        res.json("ok");
    });

    app.listen(3000, () => console.log("Listening..."));
};
//middlewareRecap2();

const middlewareRecap3 = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        console.log("First Stop: route /api/v1/products");
        next(); // מעבר למילדוור למטה במוגדר עם 3 ארגומנטים
        next("Oppso..."); // מעבר למילדוור למטה במוגדר עם 4 ארגומנטים
    });

    //מידלוור עם 4 אגומנטים;
    app.use((err, req, res, next) => {
        console.log("err", err);
        console.log("Second Stop: middleware with 4 arguments");
        res.json("ok");
    });

    //מידלוור עם 3 אגומנטים;
    // app.use((req, res, next) => {
    //     console.log("Second Stop: middleware with 3 arguments");
    //     res.json("ok");
    // });

    app.listen(3000, () => console.log("Listening..."));
};

const test = () => {
    const app = express();
    //מידלוור עם 4 אגומנטים;
    app.use((err, req, res, next) => {
        console.log("First Stop: middleware with 4 arguments");
        next();
    });

    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Stop: middleware with 4 arguments");
        res.json("yey");
    });

    app.listen(3000, () => console.log("Listening..."));
};
test();

















//משחק 5 דקות;
//---;
const fivemingame = () => {
    const app = express();

    app.use((req, res, next) => {
        console.log("First Step: Middleware Above");
        next();
    })

    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Step: route - /api/v1/products");
        res.json("yey");
        next();
    });

    app.use((req, res, next) => {
        console.log("Theard Step: Middleware Under");
    })

    app.listen(3000, () => console.log("Listen on port 5000"));
};