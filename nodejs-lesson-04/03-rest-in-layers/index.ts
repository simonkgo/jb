// client -> controller -> service -> repository

/*
    controller
    שכבה שמחצינה את הכתובות של האפליקציה ומקבלת בקשות כדי להפעיל את השכבות האחרות בקוד

    service = (business logic)
    שימוש בפונקציות שמופעלות על ידי הקונטרולר

    repository = (date access)
    אינטראקציה עם הדאטאבייס

*/

import * as express from 'express';

export class Server {
    public app: express.Application;
    public port = 3001;
    constructor() {
        this.activate();
    };
    activate() {
        this.app = express();
        this.app.use(express.json());
        this.app.get("/",(request, response)=>{
            response.json("hi");
        })
        this.app.listen(this.port, () => {
            console.log(`listening on http://127.0.0.1:${this.port}`);
        })
    }
}

new Server();