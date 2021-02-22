const util = require("util");
const fs = require("fs");

const getUsersSync = () =>{
    const result = fs.readFileSync("./db.json");
    console.log("result", JSON.parse(result));
};


const getUsersAsync1 = () => {
    fs.readFile("./db.json", "utf-8", (err,data) =>{
        if(err) throw err;
        console.log("data", data);
    })
}
const getUsersAsync2 = async() =>{
    const readFileMe = util.promisify(fs.readFile);
    try{
        const data = await readFileMe ("./db.json");
        console.log("data", JSON.parse(data));

    }catch(err){
        console.log(err)
    }
}
const main = () =>{
    console.log("do before");
    getUsersAsync2();
    console.log("do after");
}

main();