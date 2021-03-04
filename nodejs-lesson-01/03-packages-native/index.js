const os = require('os');
const crypto = require('crypto');
const path = require('path');

//Example using crypto module;
// ------------------------------------------------------------------------------------------------------------------------
const specialAgent = "Moishe";
const secretKey = 'whatAgoodDayToGoDrinkMartini';
const encryptedAgent = crypto.createHash("sha256", secretKey).update(specialAgent).digest("hex");

const checkIfAgent = (name) => {
    const result = crypto.createHash("sha256", secretKey).update(name).digest("hex"); // encrypt the name argument;
    const answer = "";

    return encryptedAgent === result ? "it's Moishe" : "Oppsi"; // validate encrypted values;
};
console.log(checkIfAgent("Moishe"));


//Example using path module;
//------------------------------------------------------------------------------------------------------------------------
console.log("is path absolute", path.isAbsolute("/foo/bar")); //true;
console.log("is path absolute", path.isAbsolute("./foo/bar")); //false;
console.log("normalize path on windows", path.normalize('C:\\foo\\bar\\baw')); //C:\foo\bar\baw;
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')); //foo/bar/baz/asdf/quux;
console.log(path.basename('/foo/bar/baz/asdf/myfile.html')); //myfile.html;
/*
    !Exersice: 
    1 console log all folders exept the file
    '/foo/bar/baz/index.html' - should print /foo/bar/baz;

    2 console log the extention of the file
    C:/foo/bar/file.exe - should print .exe
 */

