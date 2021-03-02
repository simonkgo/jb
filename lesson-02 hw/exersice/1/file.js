const fs = require('fs');


const appedData = (fileName,data) => {
   return fs.appendFileSync(fileName,data)
}

module.exports = {appedData}