<<<<<<< HEAD
if (process.env.NODE_ENV === "production") {
    global.config = require("./prod.json");

} else {
    global.config = require("./dev.json");
};

console.log(`Database Name: ${global.config.database.name}`);
=======
if(process.env.NODE_ENV === "production"){
    global.config = require("./prod.json");
}else {
    global.config = require("./dev.json");
};

console.log(`DataBase Name : ${global.config.database.name}`)
>>>>>>> 6131052216383c5ccbc9a8e499551d4183bbb2cb
