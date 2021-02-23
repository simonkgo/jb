const filename = "./users.json";
const { log } = require('console');
const fs = require('fs')
const addUser = (firstname, lastname) => {
    const user = JSON.stringify(firstname, lastname)

    fs.writeFileSync(filename, user)
}
const getUser = () => {
    const data = fs.readFileSync(filename, "utf-8");
    return data
}

module.exports = { addUser, getUser }
