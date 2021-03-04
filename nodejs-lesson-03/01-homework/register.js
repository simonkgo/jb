
const fs = require('fs');
const util = require('util');
const writeMyFile = util.promisify(fs.writeFile);

const add = async (user)=>{
    try{
        user.password = md5 (user.password);
        let data = JSON.stringify(user);
        await writeMyFile('./users.json',data);
        return user;

    }catch(err){
        throw err;
    }
}

module.exports = {add};