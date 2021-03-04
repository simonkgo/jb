/*
    rest api layers with typescript;
    layers - אזור בתוכנית שמטפל בתחום מסויים

    חלוקה לשכבות מאשרת קשר רופף בין החלקים בקוד מה שעושה סדר
    משפר את התחזוקה השוטפת ועוזרת להוסיף תוספות בעתיד

    layers flow:
    client -> controller -> service -> repository
    client <- controller <- service <- repository

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
    ---

    ***
    שאלות הבנה

    חברת ביטוח
    ? controller - קטלוג של שירותים שאפשר להירשם אלהם 
    ? service    - אחראי על לבדוק רקע מחלות וכו בדיקה של הצעות מחיר וכו
    ? repository - מכניס למאגר הלקוחות
    *צריך לפנות לחברת ביטוח אחרת לבקש מסמכים service מה אם ה 
    
    ויזה לאמריקה
    ? controller - איזה סוגי ויזות יש
    ? service    - כל התהליך 
    ? repository - עדכון בדאטה בייס
    *צריך לעדכן כמה דאטה בייסים service מה אם ה 
    *אחד עבור משרד הפנים האמריקאי ואחד עבור משרד הביטחון ? 
    ***

    flow:
    1 /database/products.json;
    !stop;
    1 /server.ts;
    !stop;
    1 /products/product;
    !stop;
    2 /products/products-controller.ts;
    !stop;
    3 /products/products-service.ts;
    !stop;
    4 /products/products-repository.ts;
    !stop;
 */

//!1;
import * as express from "express";

//!1 - after controller;
import { ProductsController } from "./products/products-controller";

//!1;
export default class Server {
    //!1;
    public app: express.Application;

    //!1;
    constructor() {
        this.activate();
    };
    
    //!1;
    activate() {
        this.app = express();
        this.app.use(express.json());
        this.app.listen(3000, () => console.log("listen on 3000"));
        this.routes();
    };

    //!1 after controller;
    routes() {
        this.app.use("/api/v1/products", new ProductsController().router);
    }
};
//!1 after controller;
new Server();