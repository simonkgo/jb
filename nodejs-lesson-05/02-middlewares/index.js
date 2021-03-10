/*
    middleware - תוכנת ביניים
    פונקציה מיוחדת שרצה בזמן החלון שבין קליטת הבקשה בשרת מהקלייט
    לבין החזרת תשובה 
    (requiest) יש לה גישה לאובייקט הבקשה
    (response) ואובייקט התשובה 
    פונקציה זו שתרוץ בראוט מסויים שנגדיר

    ? מה עושים עם זה 
    : בדרך הכלל השימוש בתוכנת ביניים נועד ל
    כשרוצים מקום אחד מרכזי שמטפל בקטע קוד בתוכנה
    כמו משפך שמכל  שמגיעים אליו

    - ולידציה של משתנים שהקליינט שולח ללקוח
    - החזרת שגיאה ללקוח 
    - בדיקה של הרשאות של הקליינט לפני מתן גישה למשאבים 
    - קוד שעושה שמריץ קוד קבוע לפני כל פעולה
?איפה מחברים את המידלוור 
    const myCoolMiddleware1 = () => {
        do somthing...
    };

    const myCoolMiddleware2 = () => {
        do somthing...
    };

    app.use("/foo", myCoolMiddleware1);
    app.use("/bar", myCoolMiddleware2);
    app.use(myCoolMiddleware2);


    ?איזה סוגים של מידלוורים יש 
    1 Application level middleware  - app.use();  
    2 Router level middleware       - router.use();
    3 Build in middleware           - express.static(), express.json();
    4 Error handling middalewar     - app.use(err);
    5 Thirdpary middleware          - cookieparse(), cors(), hemlet();
 */


const { response, request } = require("express");
const express = require("express");
const app = express();

const example1Func = (response, request, next) => {
    console.log('example1', Date.now());
    response.json("ok")
    next();
};

app.use(example1Func);
app.use("/api/example1", example1Func);

//Example2: use/get/post/put etc...;
//---;
const example2Func = (requst, response, next) => {
    console.log('example2Func:', Date.now());
    next();
};
app.use("/api/example2", example2Func);
app.get("/api/example2", example2Func);

// Example 3: miltiple middleware
//---;
const example3Func1 = (request, response, next) => {
    console.log('example3Func1 fun1');  
    next();
};

const example3Func2 = (request, response, next) => {
    console.log('example3Func1 fun2');  
    next();
};

// Example 4: same routes;
//---;
const example4Func1 = (request, response, next) => {
    console.log('example4 fun1');
    next();
};
const example4Func2 = (request, response, next) => {
    console.log('example4 fun2');
    next(); //אם לא יופעל לא יועבר למידלוור הבא
};
app.get("/api/example4", example4Func1);
app.get("/api/example4", example4Func2);



app.listen(3000, () => console.log("listen on port 3000"));