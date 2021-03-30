/*
    !---------------------- איך יוצרים ראוט  ----------------------!
    app.get("/api/v1/products", (req, res, next) => {
       return products
    });
<<<<<<< HEAD
    app.post("/api/v1/products", (req, res, next) => {
        create product
    });
=======

    app.post("/api/v1/products", (req, res, next) => {
        create product
    });

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    !---------------------- מידלוורים ----------------------!
    יש 2 סוגים של מידלוורים שאנחנו רושמים
    - עם 3 ארגומנטים
    - עם 4 ארגומנטים
<<<<<<< HEAD
    ויש 2 מקומות שאנחנו שמים אותם
    - מעל הנתיב
    - מתחת לנתיב
=======

    ויש 2 מקומות שאנחנו שמים אותם
    - מעל הנתיב
    - מתחת לנתיב

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
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
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
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
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    !מספר הארגומנטים
    ?---------------------------------------------------------------
    * ארגומנטים 3
    בדרך כלל ישמש אותנו כמידלוור לבדוק ארגומנטים לעשות ולידציה
    בדיקת הרשאות
    והכנה של דברים שצריך לפני טיפול הבקשה על ידי הפונקציה שאחראית על הנתיב
    app.use((req, res, next) => {
        console.log("Second Stop: middleware with 3 arguments");
        res.json("ok");
    });
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    * ארגומנטים 4
    בדרך כלל ישמש אותנו כמידלוור לטיפול בשגיאות
    כתיבת לוגים וכו
    app.use((err, req, res, next) => {
        console.log("Second Stop: middleware with 4 arguments");
        res.json("ok");
    });
 */

<<<<<<< HEAD
const express = require("express");
=======

const express = require("express");
//הגדרת נתיב;
//---;
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
const routeRecap = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        res.json("yey");
    });

    app.listen(3000, () => console.log("Listen on ports 3000"));
};
<<<<<<< HEAD
routeRecap();

const middlewareRecap1 = () => {
    const app = express();

// Middleware before route
    app.use((req,res,next) => {
=======
//routeRecap();

//מידלוור מעל הנתיב;
//---;
const middlewareRecap1 = () => {
    const app = express();

    //התחנה הראשונה של הבקשה;
    app.use((req, res, next) => {
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
        console.log("First Step: Middleware");
        next();
    });

<<<<<<< HEAD
=======
    //התחנה השניה של הבקשה;
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Step: Route - /api/v1/products");
        res.json("yey");
    });

    app.listen(3001, () => console.log("Listen on ports 3001"));
};
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc

const middlewareRecap3 = () => {
    const app = express();

    app.get("/api/v1/products", (req, res, next) => {
        console.log("First Stop: route /api/v1/products");
<<<<<<< HEAD
        // next(); //מעבר למידלוור למטה שמוגדר עם 3 ארגומנטים
        next("Oppso..."); //מעבר למידלוור למטה שמוגדר עם 4 ארגומנטים
    });

    // //מידלוור עם 3 ארומנטים;
=======
        //next(); // מעבר למילדוור למטה במוגדר עם 3 ארגומנטים
        //next("Oppso..."); // מעבר למילדוור למטה במוגדר עם 4 ארגומנטים
    });

    //מידלוור עם 3 אגומנטים;
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    app.use((req, res, next) => {
        console.log("Second Stop: middleware with 3 arguments");
        res.json("ok");
    });

<<<<<<< HEAD
    //מידלוור עם 4 ארומנטים;
    app.use((err,req, res, next) => {
=======
    //מידלוור עם 4 אגומנטים;
    app.use((err, req, res, next) => {
        console.log("err", err);
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
        console.log("Second Stop: middleware with 4 arguments");
        res.json("ok");
    });

<<<<<<< HEAD
    app.listen(3003, () => console.log("Listen on ports 3003"));
};
middlewareRecap3();




=======
    app.listen(3000, () => console.log("Listening..."));
};
//middlewareRecap3();

const fiveminutesgame1 = () => {
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
//fiveminutesgame1();

const fiveminutesgame2 = () => {
    const app = express();

    app.use((req, res, next) => {
        console.log("First Stop: middleware with 4 arguments");
        next();
    });

    app.get("/api/v1/products", (req, res, next) => {
        console.log("Second Stop: middleware with 4 arguments");
        res.json("yey");
        next();
    });

    app.use((req, res, next) => {
        console.log("First Stop: middleware with 4 arguments");
        next();
    });

    app.listen(3000, () => console.log("Listening..."));
};
//fiveminutesgame2();

const fiveminutesgame3 = () => {
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
//fiveminutesgame3();
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
