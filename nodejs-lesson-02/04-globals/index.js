/*
    globals

    let const הם משתנים מקומיים במודול - בקובץ אחד

    אובייקט גלובלי הוא אובייקט שמוכר בכל המודולים בכל הקבצים
    ואפשר להשתמש בהם בקובץ ללא יבוא של המודול
    
    אובייקט גלובלי הוא אובייקט שמוכר בכל המודולים בכל הקבצים
    ואפשר להשתמש בהם בקובץ ללא יבוא של המודול
    
    באובייקטים גלובלים משתמשים בדרך כלל 
    כשיש מידע משותף וככלי לגבי התוכנית שרצה ולבי הסביבה שהיא רצה 
    ולו דווקא בקוד עצמו
    כמו לדגומא מה שם התוכנית, באיזה סביבה התוכנית רצה מערכת הפעלה מאבד
    נתונים כללים כמו מה המודולים שהתוכנית משתשמשת 
    נתונים לגבי מי המשתשמש שהריץ את התוכנית במחשב
    באיזה פקודה או עם איזה הרשעות היא רצה
    מה היה הקובץ הראשי שהריץ את התוכנית
    ועוד פרטים רבים שלא תמיד מעניינים את המפתח
    אבל נמצאים שם במידה ויצטרך
    בנוסף יש מתודות גלובליות כמו 

    setInterval / clearInterval 
    exit לסגור את התוכנית
    kill להרוג אותה קצת יותר אגרסיבי
    uptime כמה זמן היא רצה 
    cpuUsage כמה משאבים היא צורכת


    לדוגמא:
    module        - מידע על המודול עצמו
    exports       - האובייקט שהמודול מייצא
    __filename    - מאפשר גישה לשם הקובץ אין צורך לייבא כדי להשתשמש
    __dirname     - מאפשר גישה לשם התיקיה אין צורך לייבא כדי להשתשמש
    console.log() - אובייקט גלובלי שמדפיס;
    process       - אובייקט גלובלי שמכיל פרטים לגבי התוכנית שרצה
    global        - אובייקט גלובלי שמוכר בין המודולים מאפשר שיתוף של מידע בין מודולים
 */


/* --------------------------------- module; -------------------------------- */
console.log("\n****************\n Module \n****************\n");
// console.log(module);

/* --------------------------------- module; -------------------------------- */
module.exports = {
    funcyey: () => { console.log("yey") },
    name: "Moishe"
};
console.log("\n****************\n After Adding Export \n****************\n");
// console.log(module);

/* ------------------------ __filename and __dirname; ----------------------- */
console.log("\n****************\n __dirname Add __filename \n****************\n");
// console.log("__dirname", __dirname);
// console.log("__filename", __filename);


/* ------------------------- global to all modules; ------------------------- */
console.log("\n****************\n Globals To All Modules \n****************\n");
//global.nameBlala = "Moishe Ufnik";
const anotherModule = require("./another-module");
// console.log(module);

/* ------------------------- process; ------------------------- */
console.log("process",process);
// console.log(process.mainModule)     // the main module started the program;
// console.log(process.env.LANG)         // lang of the system;
// console.log(process.env.TERM_PROGRAM) // the program on the os that run our program;
// console.log(process.execPath)         //the executer of the program path;
// console.log(process.getuid())         //user id in the os the run the program;
// process.exit();