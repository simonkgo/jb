const usersModule = require('./user');

const init =  async () => {
    const user =  {id:2,firstName:'Moishe',lastName:'Ufnik'};
    try {
      await usersModule.adduser(user);
       const resulte = await usersModule.getuser();
       console.log(resulte);
    } catch (error) {
        console.log('EROR');
    }
 }

init()