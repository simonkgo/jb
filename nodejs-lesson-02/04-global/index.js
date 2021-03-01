/* Globals 

local variables in the modules

A global object is an object that's 
recognized by all the files and allows 
using them without import/export


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

console.log(module);
 module.exports ={
     funcyey: ()=> {
         console.log("yey")
     },
     name: "Moishe"
 };

 console.log(module);

 /* ------------------------ __filename and __dirname; ----------------------- */
console.log("\n****************\n __dirname Add __filename \n****************\n");
console.log("__dirname", __dirname);
console.log("__filename", __filename);

/* ------------------------- global to all modules; ------------------------- */
console.log("\n****************\n Globals To All Modules \n****************\n");
global.nameBlaBla = "Moishe";
const anotherModule = require("./anothermodule.js");

/* ------------------------- global to all modules; ------------------------- */
console.log("\n****************\n Globals To All Modules \n****************\n");
// global.nameBlala = "Moishe Ufnik";
const anotherModule = require("./another-module");
console.log(module);
console.log(process.mainModule)     // the main module started the program;
console.log(process.env.LANG)         // lang of the system;
console.log(process.env.TERM_PROGRAM) // the program on the os that run our program;
console.log(process.execPath)         //the executer of the program path;
console.log(process.getuid())         //user id in the os the run the program;
process.exit();
