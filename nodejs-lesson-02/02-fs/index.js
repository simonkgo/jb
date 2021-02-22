/*

*/



const fs = require ("fs");


//1. fs.writeFileSync:

// const filename = "./file.txt";
// fs.writeFileSync(filename, "Hello World ");

//----------------------------------------------

//2.fs.appendFileSync:

// fs.appendFileSync("./file.txt","Bye Bye")


//-----------------------------------------------

//3.fs.readFileSync:

// const data = fs.readFileSync("file.txt", "utf-8")
// console.log("data", data)



const filesModule = require ("./file");
filesModule.appendData("myData.txt","Hello")
const data = fs.readFileSync("myData.txt", "utf-8")
console.log("data", data)