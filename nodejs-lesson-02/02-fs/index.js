const fs = require("fs");
const fileName = "./my-file.txt";
fs.writeFileSync(fileName, "Hello World !");

fs.appendFileSync(fileName, "\nBye, Bye");

const data = fs.readFileSync(fileName, "utf-8");
console.log(data);

const file = require("./file");

file.appendData("./new-file.txt", "Hello new file !");
