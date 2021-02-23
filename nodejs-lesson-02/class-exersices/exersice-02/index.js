const usersModule = require("./users");

const init = async () => {
    const user = {fisrName: "Moishe", lastName: "Ufnik" };

    await usersModule.addUser(user);
    const result = await usersModule.getUser();
    console.log("result", result);
};

init();


