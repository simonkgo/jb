const fs = require('fs');
const md5 = require('md5');
const util = require('util');


const readFile = util.promisify(fs.readFile);


const verify = async (user) => {
  
    try {
      const data = await readFile('users.json','utf-8');
      const someUser = JSON.parse(data);
       if (someUser.name === user.name && someUser.password === md5(user.password)){
         console.log(`Hello ${someUser.name} Walcome To My Site`);
       } else{
         console.log('Sorry This User Name Does Not  Exist In Our Sistem');
       }
    } catch (error) {
     console.log('Something Bad Happend');
   }
}

module.exports = {verify}