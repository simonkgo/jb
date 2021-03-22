import { NextFunction,Request,Response } from "express";

class HttpEror{
    public status = 400;
    public message:string;
    constructor(message:string){
        this.message = message;
    }
}

export class NotFound extends HttpEror {
    public status = 404;
    public name:'Not Found';
    constructor(message:string){
        super(message);
    };
}

export class Forbidden extends HttpEror {
    public status = 403;
    public name:'No Promision To Show Product';
    constructor(message:string){
        super(message)
    }
}
export const httpErorMiddeleware = (err:any,req:Request,res:Response,next:NextFunction) => {
    if(err instanceof HttpEror){
        const status = err.status || 400;
        const message = err.message || 'Ooooopsi...';
        res.status(status).json({message});
    } else {
        next(err)
    }
}