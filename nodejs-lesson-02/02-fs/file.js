const fs = require('fs');

const appendData = (a,b) =>{
    fs.appendFileSync (a,b);
}

module.exports={appendData};
