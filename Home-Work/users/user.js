
const fs = require('fs');

const util = require('util');

const adduser = async (user) => {
    
    try {
        const appendFile = util.promisify(fs.appendFile);

        return  await appendFile('./user.json',JSON.stringify(user))
    
    } catch (error) {
        console.log('SomeTing Bad Happend');
    }
   
}

const getuser = async () => {
    const readFile = util.promisify(fs.readFile);
     
    try {
        const get = JSON.parse(await readFile('./user.json','utf-8'));
        return get
    } catch (error) {
        console.log('SomeTing Bad Happend');
        
    }
   
}

module.exports = {
    adduser,
    getuser,
}