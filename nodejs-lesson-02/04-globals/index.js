/* --------------------------------- module; -------------------------------- */
console.log("\n****************\n Module \n****************\n");

console.log(module);

module.exports = {
    funcyey : () =>{console.log("yey")},
    name:"Moishe"
}
/* ------------------------------ after module; ------------------------------ */

console.log(module);

/* ------------------------ __filename and __dirname; ----------------------- */
console.log("\n****************\n __dirname Add __filename \n****************\n");
console.log("__dirname", __dirname);
console.log("__filename", __filename);

/* --------------------------------- global --------------------------------- */
console.log("\n*******************\n Global \n*******************\n");
global.nameBlabla = "Moishe Ufnik";
const anotherModule = require("./another-modul");
console.log(module);

/* --------------------------------- process --------------------------------- */

console.log("\n*******************\n process \n*******************\n");
console.log(process);



