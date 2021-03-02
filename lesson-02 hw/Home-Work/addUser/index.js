const userModule = require('./register');

const login = require('./login');

const main = async () => {
    try {
    const user = {name:'Moishe',password:123};
    let resulte = await userModule.add(user);
    console.log(resulte);
    const check = await login.verify(user);
    console.log(check);

        
    } catch (error) {
        console.log(error);
    }
}
main()
    
    
       
    
