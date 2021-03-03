const register = require('./register.js');
const login = require('./login.js');

const main = async () => {
    try {
        const user = { name: 'Moishe', password: '123' };

        const addresult = await register.add(user);
        console.log(addresult);

        const verifyresult = await login.verify(user);
        console.log(verifyresult);

    } catch (err) {
        console.log(err);
    };
};

main();