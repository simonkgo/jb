import { NextFunction, Request, Response } from "express";
import {v4 } from "uuid"
import path from "path"
const addImage = (req: Request, res: Response, next: NextFunction) => {
  
  

  
  if(!req.files){
    res.status(400).json({error:"image not found"})
    return 
  }
  else{
    // console.log(req.files)
    const {myImage}:any = req.files
    const name:string  = myImage.name
    console.log(name)
    const fileExtensionFile:number = name.lastIndexOf(".");
    const getFileExtension:string = name.substring(fileExtensionFile);
    const fileToSave:string = v4()+getFileExtension
    console.log(path.join(__dirname,"../images/"+fileToSave))
    myImage.mv(path.join(__dirname,"../images/"+fileToSave))
    res.json({message:"file save successfully"}).status(200)
  }

}

export default addImage;