/*
    middleware - תוכנת ביניים
    פונקציה מיוחדת שרצה בזמן החלון שבין קליטת הבקשה בשרת מהקלייט
    לבין החזרת תשובה 
    (requiest) יש לה גישה לאובייקט הבקשה
    (response) ואובייקט התשובה 
    פונקציה זו שתרוץ בראוט מסויים שנגדיר

    ? מה עושים עם זה 
    : בדרך הכלל השימוש בתוכנת ביניים נועד ל
    כשרוצים שיקרה משהו כשהקוד עובר משכבה אחת לשניה
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
    5 Thirdpary middleware          - cookieparse(), lala(), hemlet();
*/
/*
   --------------------------------------------------------------------------
   ---------------------- Application-level middleware; ---------------------   
   --------------------------------------------------------------------------
   request  - טופס הבקשה
   response - טופס התשובה
   next     - אובייקט מיוחד שמעביר את הטיפול למידלוור הבא 
 */

const { response } = require("express");
const express = require("express");
const app = express();

//Example1: specific route vs all routes;
//---;
const example1Func = (requst, response, next) => {
    console.log('example1Func:', Date.now());
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
app.use("/api/example2", example2Func); //will be activated becaise use actived for all methods;
app.get("/api/example2", example2Func);
app.post("/api/example2", example2Func);


//Example3: miltiple middlewares;
//---;
const example3Func1 = (request, response, next) => {
    console.log('example3Func1 fun1');
    next();
};
const example3Func2 = (request, response, next) => {
    console.log('example3 fun2');
    next();
};
app.get("/api/example3", [example3Func1, example3Func2]);


//Example4: same routes;
//---;
const example4Func1 = (request, response, next) => {
    console.log('example4 func1');
    response.json("ok");
    next(); // אם לא יופעל לא יועבר למידלוור הבא
};
const example4Func2 = (request, response, next) => {
    console.log('example4 func2');
    response.json("ok");
};
app.get("/api/example4", example4Func1);
app.get("/api/example4", example4Func2);
/*
   --------------------------------------------------------------------------
   ---------------------- Router-level middleware; --------------------------   
   --------------------------------------------------------------------------
   ?what is routes and what diff vs app
   const app = express(); -> app - מחזיר את אובייקט אפלינקציה מלא
   const router = express().Router(); -> app - מוחזר רק האובייקט שאחראי על ראוטס שהוא נמצא גם בתוך האפליקציה המלאה

   הרעיון הוא שכשאפליקציה גודלת מחלקים את הקוד לקבצים 
   :לדוגמא קובץ עבור 
   /users.ts
   /messages.ts
   router לכל קובץ מעבירים אובייקט קטן של 

   /messages.ts ואם אם רוצים לרשום משהו רק עבור 
   router.use(middleware) 

   ואם רוצים עבור כל הדפים עושים בדך הראשי
   app.use(middleware)
 */

//איתחול פונקציה אחת עבור ראוט משתמשים ופונקציה אחת עבור ראוט הודעות;
//---;
const userFunc = (requst, response, next) => {
    console.log("users");
};
const messagesFunc = (requst, response, next) => {
    console.log("messages");
};

//איתחול אי אובייקט ראוט עבור משתשמשים ועבור הודעות;
//---;
const routerUsers = express.Router();
const routerMessages = express.Router();

//רישום מידלוורים עבור כל אובייקט ראוט;
//---;
routerUsers.use("/users", userFunc);
routerMessages.use("/messages", messagesFunc);

//חיבור האובייקטים לאפליקיה הכללית;
//---;
app.use("/api", routerUsers); //api/users
app.use("/api", routerMessages); //api/messages


/**
  ---------------------- Built-in middleware; ------------------------------   
   express.static - להגיש קבצים סטטים בעיקר משתמשים כדי להגיש את הרפוייקט שנבנה בראקט או אנגולר
   express.json   - מאפשר לקבל מידע שמגיע בפורמט גייסון 
   app.use(express.json())
**/



/*
   ---------------------- Third-party middleware; ------------------------------   
   בהרבה מקרים מי שמפתח שרת באקספרס ישתמש בחבילות צד שלישי
   middelware שמספקות פונקציות תוכנית ביניים
   אופן השימוש הוא רגיל
   npm מתקינים עם 
   ואז מחברים במקום הרצוי בראוט

   אין צורך בשלב זה להבין את הסיפריות עצמן
   הרעיון שאנחנו יכולים להוריד סיפריה
   ולרשום אותה כמידלוור בתוך האפליקציה שלנו איפה שנבחר
 */

//morgan - סיפריה צד שלישי שעוקבת אחרי כל הבקשות ומדפיסה את כל הבקשות בפורמט שהמתכנת מגדיר
//express-rate-limit - הגבלה של מספר כניסות לאייפי
//---;
/*
    !Exersice
    express-rate-limit
*/
const morgan = require('morgan')
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(morgan('dev'));
app.use("/api/example1",limiter);
app.use("/api/example1", example1Func);
app.use("/api/example2", example1Func);
app.use("/api/example3", example1Func);

app.listen(3000, () => console.log("listen in port 3000"));
