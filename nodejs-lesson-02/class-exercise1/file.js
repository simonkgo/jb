const fs = require('fs');

const file1 = "ex-file.txt";
fs.writeFileSync(file1, "Hey There");
fs.appendFileSync(file1, "\n and I appended it");
