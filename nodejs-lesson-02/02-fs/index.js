
const fs = require('fs');
const filesModule = require ("./file");

const fileName = "./my-file.txt";
fs.writeFileSync(fileName,"Hello to you :)");

filesModule.appendData(fileName," data");
const consoleMe = fs.readFileSync("./my-file.txt", 'utf8');
console.log(consoleMe);
