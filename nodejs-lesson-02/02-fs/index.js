const fs = require('fs')

fs.writeFileSync('./my-file-text','Hello New file 1');

fs.appendFileSync('./my-file-text','\nHello Older file 2');

const data = fs.readFileSync('./my-file-text',"utf-8");
console.log(data);


