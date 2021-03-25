/*
    CORS - Problem;

    CORS - Cross Origin Resources Sharing;
    מנגנון הגנה שמאפשר לשרת לראות מאיזה כתובת הקליינט פנה דרך הדפדפן
    ולבחור האם לאפשר לו לקבל את המידע או לא
    המנגנון מסתמך על העובדה שקיימת בדפדפן פעולה שנקראת 
    preflight - הקדמה מראש
    
    *נקודות מפתח
    - בעיה שקיימת רק בדפדפנים, לא היתה קיימת בתוסף אייפי איי שהשתמשנו למרות שגם הוא סוג של קליינט    

    - Origin - מקור - כתובת האתר;
    - איפה ניתן לראות אותו ?
    מופיע בהאדר של כל בקשה שנשלחת ואי אפשר לשנות אותו בדפדפן;

    - Same Origin - הקליינט והסרבר באו מאותו הכתובת;
    ?מזה כתובת זהה
    localhost:3000; is same localhost:3000;
    גם שם הדומיין/אתר וגם הפורט זהים - משמע זו אותה כתובת המקור

    - Cross Origin - הקליינט והסרבר נמצאים ב 2 כתובות שונות
    ? כזה כתובת שונה
    localhost:3000; is not same localhost:3001;
    במידה שם הדומיין/אתר או ההפורט שונה - משמע הכתובת המקור שונה בין הקלייט והסרבר

    ?זהה Origin האם ה 
    localhost:3000/api/v1/users;
    localhost:3000/api/v1/products;
    כן האוריגין מתייחס לשם הדומיין ולפורט ולא למה שאחרי
    שאר הכתובת נועדה לחלוקה של התוכנית שלנו כפי שעשינו בתרגילים

    ?הבעיה מתרחשת 
    Cross Origin - כאשר כתובת המקור של הקלייט ושל הסרבר לא תואמים

    ?cors error example:
    !Access to XMLHttpRequest at 'http://www.mobiles.com' 
    !from origin 'http://www.myshop.com:3000/api/v1/users' 
    !has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    
    ?what the diff between localhost and www.myGreateWebSite.com;
    ?if my client in www.myGreatWebite.com and i send ajax request to www.someOtherGreateWebsite.com;
 */

const express = require("express");
const products = [{ "id": 1, "name": "Moishe Ufnik" }, { "id": 2, "name": "Kipi Ben Kipod" }];

const cors = require("cors");

const main = () => {
    const app = express();

    //CORS enable all;
    //---;
    app.use(cors());

    app.get("/api/v1/users", (req, res) => res.json(products));
    app.listen(3000, () => console.log("Listing..."));
};
main();







