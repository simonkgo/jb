<<<<<<< HEAD
/*
    node config;
*/

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    global.config = require("./prod.json");

=======
if (process.env.NODE_ENV === "production") {
    global.config = require("./prod.json");
>>>>>>> master
} else {
    global.config = require("./dev.json");
};

<<<<<<< HEAD
console.log(`Database Name: ${global.config.database.name}`);
=======
console.log(`DataBase Name : ${global.config.database.name}`)
console.log(`DataBase Name : ${global.config.database.name}`)
>>>>>>> master
