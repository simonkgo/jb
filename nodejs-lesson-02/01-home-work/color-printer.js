const colors = require("colors");

function colorPrinter(arr) {
    for(const item of arr) {
        console.log(colors.random(item.toString()));
    }
}

module.exports = colorPrinter;