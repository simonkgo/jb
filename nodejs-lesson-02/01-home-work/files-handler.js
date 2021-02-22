const fs = require("fs");

function saveArray(fileName, arr) {
    fs.writeFileSync(fileName, arr);
}

function readArray(fileName) {
    const data = fs.readFileSync(fileName, "utf-8");
    return data;
}

module.exports = { 
    saveArray,
    readArray
};