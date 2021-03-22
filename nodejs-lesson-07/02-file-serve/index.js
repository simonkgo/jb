/*
    Serving Files;
    נבין מזה הגשת קבצים סטטים
    מזה קבצים סטטים
    ואיך זה עושים את זה בעזרת אסקפרס ואיך זה ישתלב עם פרוייקטים של קליינט בעתיד ראקט ואנגולר

    שרת זו תוכנה שאנחנו כותבים בעזרת נואד
    עד עכשיו פנינו אליו כדי לשנות ריסורסים לעדכן לקבל
    לרוב זה מה שעושים
    
    פונקציונליות נוספת שהשרת יודע לעשות זה לעבוד עם קבצים
    לשלוח אותם או לקבל ולשמור
    קליינט שנכנס מהדפדפן מצפה לקבל משהו ויזואלי 
    איך הדבר הזה קורה
    
    ? מה קליינט מצפה לקבל כשנכנס לאיזו שהיא כתובת דרך הדפדפן 
    ? מה עומד מאחרי אותה הכתובת
    ? מה יוחזר לשרת שהוא יפנה לתוכנה שכתבנו
    ? מה הדפדפן יודע לעבד ולהציג
    ? מה השרת שלנו צריך להחזיר לו אז

    html הדפדפן יודע לתרגם קובץ בטגיות קובץ 
    כשהשרת מספק לו את זה 
    
    בשביל כך קיימות פונקציות מיוחדות באקספרס

    ?Exersice;
    create new route /api/v1/my-project;
    when client will req that url - serve to the client the public folder;
    (same as we did but this time only for that route);

    ?Exersice Challenge;
    add new file my-name.html and add to it new tag h1 with your name;
    create new route route /api/v1/my-name;
    when client will req that url - serve to the client the file that you had created (my-index.html);
 */

const express = require("express");
const path = require("path");

const main = () => {
    const app = express();

    /* ------------------ בניית נתיב של התיקיה שמכילה את הקבצים ----------------- */
    /*
        שימוש במודול גלובלי כדי לבנות את הכתובת לתיקיה שאותה נרצה לתת ללקוח
        path.join("C:/files","file1.pdf"); -> C:/files/file1.pdf
        __dirname - משתנה גלובלי התיקיה הנוכחית של הקובץ
     */
    //Users/simon/Desktop/lessons/jb/nodejs-lesson-07/02-file-serve/public
    const publicFolderPath = path.join(__dirname, "./public");


    /* --------- רישום של התיקיה למידלוור המיוחד שיספק את הקבצים לקליינט -------- */
    /*
        פונקציה שמקבלת לתוכנה את כתובת התיקיה של הקבצים שנרצה להגיש מכינה אותם מחזירה לקליינט                   
        express.static(נתיב לקבצים)
    */
   app.use(express.static(publicFolderPath))
   app.listen(3000, () => console.log("Listening on port 3000"));

    //Exersice
    //const publicFolderPath = path.join(__dirname, "./public/my-name.html"); 
    //app.use("/api/v1/my-name",express.static(publicFolderPath))
};
main();