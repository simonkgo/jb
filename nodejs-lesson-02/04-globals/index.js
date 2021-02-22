/*
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
global        - אובייקט גלובלי שמוכר בין המודולים
*/

/* -------------------------------------------------------------------------- */
/*                                   module                                   */
/* -------------------------------------------------------------------------- */

//Before adding exports

console.log("\n****************\n Module Before adding exports \n****************\n");
// console.log(module);

//After adding exports
module.exports = {
    funcyey: () => {console.log("yey")}
};

console.log("\n****************\n Module After adding exports \n****************\n");
// console.log(module);

/* ------------------------ __filename and __dirname; ----------------------- */
console.log("\n****************\n __dirname Add __filename \n****************\n");
console.log("__dirname", __dirname);
console.log("__filename", __filename);


/* ------------------------- global to all modules; ------------------------- */
console.log("\n****************\n Globals To All Modules \n****************\n");
global.nameBlabla = "Moishe Ufnik";
// const anotherModule = require("./another-module");
// console.log(module);

console.log(process.mainModule)     // the main module started the program;
// console.log(process.env.LANG)         // lang of the system;
// console.log(process.env.TERM_PROGRAM) // the program on the os that run our program;
// console.log(process.execPath)         //the executer of the program path;
// console.log(process.getuid())         //user id in the os the run the program;
// process.exit();
