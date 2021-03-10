/*
    recap
    controller  - מראה את סוגי האייפי איי כרגע רק רסט בעתיד יכול להיות דברים נוספים
    service     - מכיל את הלוגיקה של האפליקציה ושם רוב העבודה
    respository - מחובר לקבצים במקרה שלנו בעתיד לדאטה בייס והתפקיד זה לקבל לקרוא מהקובץ או לכתוב אליו וזהו 
 */

import * as express from 'express';
import { ProductsController } from "./products/products-controller";

export default class Server {
    public app: any;

    constructor() {
        this.activate();
    };

    activate() {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new ProductsController().router); // /api/v1/products
        this.app.listen(3000, () => console.log("listen on port 3000"));
    };
};
new Server();