const fs = require("fs");

const appendData = (filename, data) => {
    fs.appendFileSync(filename, data);
};

module.exports = { appendData: appendData };
