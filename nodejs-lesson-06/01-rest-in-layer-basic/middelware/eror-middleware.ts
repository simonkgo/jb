import * as express from 'express';
import {Request,Response} from 'express';

class HttpEror{
    public status = 400;
    public message:string;
    constructor(message:string){
        this.message = message;
    }
}

export class NotFound extends HttpEror{
    public status = 404;
    public name = 'Not found';
    constructor(message:string){
        super(message);
    }
}

export const erorMiddelware = (err:any,req:Request,res:Response,next:express.NextFunction) => {
    if(err instanceof HttpEror){
        const status = err.status;
        const message = err.message;
        res.status(status).json({message})
    }else{
        next();
    };
};

export const serverDowmMiddelware =  (err:any,req:Request,res:Response,next:express.NextFunction) => {
    res.json({message:`The Server Is Down Please Try Again Later`});
}