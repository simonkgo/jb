import { NextFunction,Request,Response } from "express"

const deleteEmployee=(req:Request,res:Response,next:NextFunction) =>{
    console.log(`user is going to delete employee ${req.params.id}`)
    next()
} 

export default deleteEmployee;