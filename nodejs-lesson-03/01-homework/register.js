const md5 = require('md5');
const util = require('util');
const fs = require('fs');
const writeFile = util.promisify(fs.writeFile);

const add = async (user) => {
  try {
    user.password = md5(user.password);
    await writeFile('./users.json', JSON.stringify(user));
    return user;

  } catch (error) {
    throw error
  };
};

module.exports = { add };