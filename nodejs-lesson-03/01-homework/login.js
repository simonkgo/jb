const util = require('util');
const fs = require('fs');
const md5 = require('md5');
const readFile = util.promisify(fs.readFile);

const verify = async (userquery) => {
    try {
        let result = "";
        const fileData = await readFile('./users.json', 'utf-8');
        const user = JSON.parse(fileData);

        if (user.name === userquery.name && user.password === md5(userquery.password)) {
            result = user;
        } else {
            result = "user still not exist";
        };
        
        return result;

    } catch (error) {
        throw error;
    }
};

module.exports = { verify };