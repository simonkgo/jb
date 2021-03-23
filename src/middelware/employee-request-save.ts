import { NextFunction, Request, Response } from "express";
import path from "path"
import fs from "fs/promises"
const saveRequestInformation = async (req:Request,res:Response,next:NextFunction)=>{
    
    const url = path.join(__dirname,"../request-information/information.txt")
    
    const requestDetail = {
        method :req.method,
        path:req.path,
        date:new Date()
    }
    await fs.appendFile(url,JSON.stringify(requestDetail))
    next()
}

export default saveRequestInformation;