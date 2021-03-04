console.log("homework");
const register = require('./register.js');
const md5 = require('md5');

const main = async() =>{
    try{
        const user = {name:"Hen", password:md5("12345")};
        const registerResult = await register.add(user);
        console.log("registerResult", registerResult);
        return user;

    }catch(err){
        console.log(err)
    }
}
main();