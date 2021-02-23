/*
    node config;
*/

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    global.config = require("./prod.json");

} else {
    global.config = require("./dev.json");
};

console.log(`Database Name: ${global.config.database.name}`);
console.log(`Database Name: ${global.config.database.name}`);
