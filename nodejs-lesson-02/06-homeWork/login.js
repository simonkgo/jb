const fs = require('fs')
var md5 = require('md5');
const util = require("util");


const login = async (username, password) => {
    const readFile = util.promisify(fs.readFile)
    try {
        const user = await readFile('./users.json')
        const parsedUser = (JSON.parse(user));
        parsedUser.username === username ? console.log('correct username') : console.log('wrong username');
        parsedUser.password === md5(password) ? console.log('correct password') : console.log('wrong password')
    }
    catch (err) {
        console.log(err);
    }


}

module.exports = login;