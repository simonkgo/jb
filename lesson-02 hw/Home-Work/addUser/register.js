const fs = require('fs');
const util = require('util');
const md5 = require('md5');
const writeFile = util.promisify(fs.writeFile);


const add = async (user) => {
     try {
      user.password = md5(user.password);
      let data = JSON.stringify(user);
      await writeFile('users.json',data);
      return user;
      } catch (error) {
        throw new error
    }
}

module.exports = {add}