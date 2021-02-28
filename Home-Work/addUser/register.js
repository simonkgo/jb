const fs = require('fs');

const util = require('util');

var md5 = require('md5');


const add = async (user) => {
    user.password = md5(user.password);
   const appendFile = util.promisify(fs.appendFile);

    try {
        const users = await appendFile('users.json',JSON.stringify(user));
        return users
      } catch (error) {
        throw new error
    }
}

module.exports = {add}