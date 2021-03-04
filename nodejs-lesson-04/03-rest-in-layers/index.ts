/*
    Rest API layers with TypeScript;
    layers - אזור בתוכנית שמטפל בתחום מסויים

    חלוקה לשכבות מאשרת קשר רופף בין החלקים בקוד מה שעושה סדר
    משפר את התחזוקה השוטפת ועוזרת להוסיף תוספות בעתיד

    layers flow:
    client -> controller -> service -> repository -> db
    client <- controller <- service <- repository <- db

    layers controller - שכבה שחופשת את הראוטים את הכתובות של האפליקציה
    שכבת ניהול שאחראית על קבלת בקשות והחזרה תשובה לקליינט
    שכבה שמקבלת את הבקשה ומפעילה את הפונקציונליות המתאימה באפליקציה 
    לאחר מכן מחזירה תשובה לקלייט
    שכבה שאמורה להיות רזה ללא הרבה לוגיקה להפעיל פונקציות בתוך האפליקציה ולהחזיר תשובה בסיום
layers service (BL לפעמים קוראים לה גם) - שכבה בתוכנית שנותנת שירותים ומבצעת את העבודה 
    controller השכבה חופשת פונקציות שמופעלות על ידי שכבת ה 
    repository לשכבה זו יש גישה לדאטה שהיא מקבלת משכבת ה     
    בא נעשת רוב העבודה ה״כבדה״ והיא סוג של ״מתווך״ בין 2 השכבות הנוספות
    כמו הוספה שינוי של משאבים בדיקה של התוכן המוכנס האם חוקי או לא חוקי 
    זו שכבה שבודקת האם המידע חוקי ולא מפעילה בכלל את הפונקציונליות של הדאטה בייס במידה ואין צורך
    
    repository = מאגר
    layers repository(DAL לפעמים קוראים לה גם) - שכבה שאחראית על האינטרקציה עם הדאטה בייס
    שכבה רזה שהמידע שהגיע אליה הוא כבר מוכן להיכנס לדאטה בייס והיא רק משמשת כ״חיבור״

    חברת ביטוח
    ? controller  - /api/insurance/buy
    ? service     - אחראי על לבדוק רקע מחלות וכו בדיקה של הצעות מחיר וכו
    ? repository  - מכניס למאגר הלקוחות
 */


import * as express from "express";

export class Server{
    public app: express.Application;
    constructor(){
        this.activate();
    };
    activate(){
        this.app = express();
        this.app.use(express.json());
        this.app.listen("3000", () => console.log("Server listening on port 3000"));
    };
}; 

new Server();

