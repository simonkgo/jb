<<<<<<< HEAD
const fs = require('fs')
const appendData = require('./file')


const filename = './example.txt'
// fs.writeFileSync(filename, 'hello world')
// fs.appendFileSync(filename, '\n bye bye')
// fs.appendFileSync(filename, '\n bye bye man')


appendData('./example.txt', '\n its working!!')
const data = fs.readFileSync(filename, 'utf-8')
console.log(data);
=======
/*
    ---
     fs = File System

     מודול שמכיל בתוכו פונקציות מגוונות לעבודה עם קבצים
     עבודה כמו כתיבה לקובץ או קריאה מתוך קובץ מחיקה וכו

     ייבוא של מודול גלובלי
     const fs = require('fs')
     ---

     דוגמאות לשימוש - כתיבה של גייסון לקובץ בשרת או קריאה ממנו
     בדוגמא נראה איך כותבים לקובץ איך קוראים ממנו ובאיזה פונקציות נשתמש כדי לעשות את זה.
 */

const fs = require("fs");
const filename = "./my-file.txt";

/*
    ------ יצור ויכתוב לתוך הקובץ או ידרוס את הקובץ ------ 
    !fs.writeFileSync(argument1, argument2);
    argument1 - file name;
    argument2 - text;
*/
fs.writeFileSync(filename, "Hello All!\nI'm writing!\n");


/*
    ------ יוסיף את התוכן לקובץ קיים ולא ידרוס את מה שהיה לפני ------ 
    !fs.appendFileSync(argument1, argument2);
    argument1 - file name;
    argument2 - text;
*/
fs.appendFileSync(filename, "Bye Bye...!");


/*
    ------ יקרא את הקובץ ואת התוכן ישמור במשתנה ------ 
    !fs.readFileSync(argument1, argument2);
    argument1 - file name;
    argument2 - text incoding;
*/
const data = fs.readFileSync(filename, "utf-8");
console.log("data", data);
>>>>>>> master
