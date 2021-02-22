const fs = require('fs')

const appendData = function(fileName,data) {
    fs.appendFileSync(fileName,data)
return "Success"
}

module.exports= {appendData}