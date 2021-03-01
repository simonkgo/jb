/* Read JSON Files 
fs.readFileSynce(file name, text incoding)
This is a synchronic function, the code will 
run by order. 
*/
const fs = require('fs');
const util = require('util')
const getUsersSync = () =>{
    const result = fs.readFileSync("./db.json", "utf-8")
    console.log("result", result)
};

getUsersSync();

/* Example for the Syncronic nature of readFileSync */
const main = () =>{
    console.log("Before");
    getUsersSync();
    console.log("After")
};

main();

/* readFile - Asynchronic Function 
    argument1 - file name 
    argument2 - text incoding
    argument3 - callback funcftion
*/

const getUserAsync1 = () =>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if (err){
            console.log("err", err);
        }  
        console.log("data", JSON.parse(data))
    })
}


const main1 = () =>{
    console.log("Before");
    getUserAsync1();
    console.log("After")
};

main1();

const getUsersAsync2 = () =>{
    const readFile = util.promisify(fs.readFile);
    try{
        const data = await readFile("/.db.json", "utf-8")
        console.log("data", JSON.parse(data))
    }catch (err) {
        console.log(err)
    }
}


const main2 = () =>{
    console.log("Before read file");
    getUsersAsync2();
    console.log("After read file")
};

main2();