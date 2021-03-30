<<<<<<< HEAD


const fs = requier("fs").Promises;

const getUsersRepository1 = async() => {
    try {
        const data = await fs.readFile("./db.json", "utf-8");
        return data;
    } catch (error) {
        throw error
    };
};

const getUsersService1 = async () => {
    try {
        const result = await getUsersRepository1();
        console.log("result", result);
    } catch (err) {

    };
};
getUsersService1();

=======
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
/*
    Error Handling - טיפול בשגיאות
    שרת זו תוכנה
    והיא עובדת על מעכשיו שרצות עליו עוד מאות ואלפי תוכנות אחרות
    ולא תמיד הדברים עובדים כצפוי
    יש לקחת בחשבון שיהיו שגיאות או כתוצאה מגורמים שלא קשורים לתוכנה שלנו
    ויכול להיות אפילו כתוצאה מהקוד שהמתכת כתב
    לכן יש צורך להגיב בזמן שגיאה
    יש לקחת בחשבון את סוג השגיאה ולהגיב בהתאם לצורך שלנו
    - גם כדי להודיע לקליינט שמשהו קרה
    - למנוע או לגרום לקריסת התוכית 
    - לבחון אם המצב תקין או שהמתכנת צריך כוס קפה
<<<<<<< HEAD
    3 Types of errors in programming;   
    *1 Compilation Errors;
=======

    3 Types of errors in programming;   
    *1 Compilation Errors;

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    *2 Operational Errors; - שגיאות שאין להם קשר לבאגים בתוך התוכנה עצמה
    אלא שגיאות שמתייחסות לקוד תקין
    והסיבה שהם קוראות לא קשורה לתוכנה שהמפתח כתב
    אל בדרך כלל לדברים אחרים
    כמו:
    בעיות תקשורת
    בעיה להתחבר לדאטה בייס
    בעית זיכרון במחשב שהתוכנה רצה עליו
    מידע שגוי שהקליינט שלח
<<<<<<< HEAD
=======

>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
    *3 Programmer Errors; - שגיאות שדורשות כוס קפה
    אלא שגיאות שנובעות כתוצאה מבאג 
    כתוצאה מבעיה בקוד שהמכנת כתב - יש לספק לו קפה מידית
    כמו דגומא ניסה לגשת למשתנה שלא קיים, או להפעיל פונקציה שלא קיימת וכו
    והם מצביעות על כך שיש בעיה בתוכנה שלנו
    שגיאות אלה הם מצביעות על באג ולא אמורות להיות בסביבית פרודקשן
    הדבר הנכון לעשות הוא להקריס את התוכנית כתוצאה משגיאות אלה ולטפל בהם 
 */

/* --------------------------- Operational Errors; -------------------------- */
const fs = require("fs").promises;
const getUsersRepository1 = async () => {
    //בכאילו פונים לדאטה בייס שהוא לא חלק מהקוד של התוכנה שלנו
    try {
        const data = await fs.readFile("./db.json", "utf-8");
        return data;
    } catch (err) {
        throw err;
    };
};
const getUsersService1 = async () => {
    try {
        const result = await getUsersRepository1();
        console.log("result", result);
    } catch (err) {
        console.log("some problem please try in few seconds");
        // return to the client some grafull message;
    };
};
getUsersService1();


/* ---------------------------- Programmer Errors --------------------------- */
const getUsersRepository2 = async () => {
    const data = await fs.readFile("./db.json", "utf-8");
    data.sayHi();
    return data;
};
const getUsersService2 = async () => {
    try {
        const result = await getUsersRepository2();
        console.log("result", result);
    } catch (err) {
        console.log("Please be more carful next time");
        process.exit(1); // קוד 1 מצביע כך שהתוכנה יצאה עקב שגיאה;
    };
};
<<<<<<< HEAD
getUsersService2();
=======
getUsersService2();
>>>>>>> 2c179335f925f3d8956b3ebcbe67043e21656fbc
