import { NextFunction,Request,Response } from "express"



class HttpDelete {
    public status = 200
    public message: string
    constructor(message: string) {
        this.message = message
    }
}


export class Deleted extends HttpDelete{
    public status = 204;
    public name = 'Deleted'
    constructor(message:string){
        super(message)
    }
}

export const httpDeleteMiddleware = (err:any, req:Request,res:Response,next:NextFunction)=>{

    console.log(err.status);
    console.log(err.message);
    res.status(err.status).json(err.message)
}