import { NextFunction,Request,Response } from "express"

class HttpError {
    public status = 400
    public message: string
    constructor(message: string) {
        this.message = message
    }
}

export class NotFound extends HttpError{
    public status = 404
    public name ='Not Found'
    constructor(message:string){
        super(message)
    }
}

export class BadRequest extends HttpError{
    public status = 400
    public name = 'Bad Request'
    constructor(message:string){
        super(message)
    }
}

export const httpErrorMiddleware = (err:any, req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof HttpError){
        const status=err.status|| 400
        const message = err.message|| 'oppppssssss'
        res.status(status).json({message: message})

    }
    else{
        next(err)
    }
}