const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const addUser = async (user) => {
    try {
        let data = JSON.stringify(user);
        await writeFile('./users.json', data);
    } catch (err) {
        throw err;
    };
};

const getUser = async (id) => {
    try {
        const result = await readFile('./users.json', "utf-8");
        const parsedResult = JSON.parse(result);
        return parsedResult;
        
    } catch (err) {
        throw err;
    }
};

module.exports = { getUser, addUser };
