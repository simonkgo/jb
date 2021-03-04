/*
     Files:
 */

const fs = require("fs"); // fs = File System

const fileName = "./my-file.txt";

fs.writeFileSync(fileName, "Hello All!\nI'm writing!\n"); // ידרוס את הקובץ אם קיים

//!Exersice;
fs.appendFileSync(fileName, "Bye Bye..."); // מוסיף לקובץ ולא דורס אותו

//!Exersice;
const data = fs.readFileSync(fileName, "utf-8");
console.log(data);
