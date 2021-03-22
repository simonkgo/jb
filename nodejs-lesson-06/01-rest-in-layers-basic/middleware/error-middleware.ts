import {Request, Response, NextFunction} from "express";

class HttpError {
    public status = 400;
    public message:string;
    constructor(message:string){
        this.message = message;
    };
};

export class NotFound extends HttpError{
    public status = 404;
    public name = "not found";
    constructor(message:string){
        super(message);
    };
};

export class Forbidden extends HttpError{
    public status = 403;
    public name = "Forbidden";
    constructor(message:string){
        super(message);
    };
};

export class BadReq extends HttpError{
    public status = 400;
    public name = "Bad Reqest";
    constructor(message:string){
        super(message);
    };
};

export const HttpErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction)=>{
    if(error instanceof HttpError){
        const status = error.status || 400;
        const message = error.message || "oh no!"
        res.status(status).json({message});
    }else{
        next(error);
    };
};

export const ProgrammingErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction)=>{
    res.json("programmer not doing well today");
    console.log(error);
    process.exit(1);
};