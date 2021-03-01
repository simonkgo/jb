/* File System */

/* Initiating the Global Function */

const fs = require('fs');

/* How to write Regular Text
    argument 1 - file name;
    argument 2 - content;
*/

const filename = "my-file.txt"
fs.writeFileSync(filename, "Hello world");

/* Adding Content to Existing File */

fs.appendFileSync(filename, "Bye Bye");
fs.appendFileSync(filename, "\nBye Bye");

/* Reading from Files
argunemt 1 - file name;
argument 2 - text incoding
*/

const data = fs.readFileSync(filename, "utf-8");
console.log("data", data);

fs.appendFileSync(file1, "\n this is coming from index");
