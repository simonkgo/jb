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
