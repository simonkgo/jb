const users = [{ firstName: "Moishe" }, { firstName: "Ufink" }];

const getUsers = (userName) => {
    users.find(user => user.firstName === userName);
};

console.log(getUsers("Moishe"));