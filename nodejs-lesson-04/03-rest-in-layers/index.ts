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
import UserModel from './userModel';
const users: UserModel[] = [
    {id: 1, firstName: "shai", lastName: "eliav", department: "admin"},
    {id: 2, firstName: "ben", lastName: "oz", department: "books"}
] 

export class Server {
    public app: express.Application;
    public port = 3001;
    constructor() {
        this.activate();
    };
    activate() {
        this.app = express();
        this.app.use(express.json());
        this.app.get("/api/v1/users",(request, response)=>{
            response.json(users);
        });
        this.app.get("/api/v1/users/:id",(request, response)=>{
            const id = +request.params.id;
            const user = users.find(user => user.id === id);
            response.json(user);
        })
        this.app.post("/api/v1/users",(request, response)=>{
            const user:UserModel = request.body;
            let newId = 1;
            const verifyId = () => {
                const isUserExist = users.find(user => user.id === newId)
                if(!isUserExist){
                    return;
                }
                newId++;
                verifyId();
            }
            verifyId();
            user.id = newId;
            users.push(user);
            response.json(users);
        });

        this.app.put("/api/v1/users/:id",(request, response)=>{
            const id = +request.params.id;
            const user = users.find(user => user.id === id);
            const update: UserModel = request.body;
            if(user) {
                user.department = update.department;
                user.firstName = update.firstName;
                user.lastName = update.lastName;
            } 
            response.json(user);
        });
        this.app.patch("/api/v1/users/:id",(request, response)=>{
            const id = +request.params.id;
            const user = users.find(user => user.id === id);
            const update = request.body;
            if(user) {
                update.department ? user.department = update.department : null;
                update.firstName ? user.firstName = update.firstName : null;
                update.lastName ? user.lastName = update.lastName : null;
            } 
            response.json(user);
        });
        this.app.delete("/api/v1/users/:id",(request, response)=>{
            const id = +request.params.id;
            const user = users.find(user => user.id === id);
            if (user){
                const indexToRemove = users.indexOf(user);
                users.splice(indexToRemove,1);
            }
            response.json(users);
        });
        this.app.listen(this.port, () => {
            console.log(`listening on http://127.0.0.1:${this.port}`);
        });
    }
}

new Server();