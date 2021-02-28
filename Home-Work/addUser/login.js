const fs = require('fs');

const util = require('util');


const verify = async (user) => {
  const readFile = util.promisify(fs.readFile);
  
    try {
    const someUser = JSON.parse(await readFile('users.json','utf-8'));
       if (someUser.name === user.name && someUser.password === user.password){
         console.log(`Hello ${someUser.name} Walcome To My Site`);
       } else{
         console.log('Sorry This User Name Does Not  Exist In Our Sistem');
       }
    } catch (error) {
     console.log('Something Bad Happend');
   }
}

module.exports = {verify}