
const fs = require('fs');

const util = require('util');

const adduser = (user) => {

    const formatToAsync = util.promisify(fs.appendFile);

    return formatToAsync('./user.json',JSON.stringify(user))

}

const getuser = () => {
    const formatToAsync = util.promisify(fs.readFile);
    return formatToAsync('./user.json','utf-8')
}

module.exports = {
    adduser,
    getuser,
}