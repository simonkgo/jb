const fs = require('fs')
const {appendData} = require("./file")



const fileName = "./myFile.txt"
const text = "hello World "
const newText = "Good Morning"
// new one
fs.writeFileSync(fileName,text)
// update
fs.appendFileSync(fileName,newText)

// reading
const data = fs.readFileSync("./myFile.txt","utf-8");
console.log("data:",data);

// sending data to function from file.js
console.log(appendData("FileNameHere","DataIsHere")); 
