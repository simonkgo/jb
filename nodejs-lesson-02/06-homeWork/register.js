const fs = require('fs')
var md5 = require('md5');

const filename = "./users.json";

const register = (username, password) => {
    const user = JSON.stringify({ username: username, password: md5(password) })

    fs.writeFileSync(filename, user)

}
module.exports = register;