const fs = require ("fs");
const util = require ("util");

//פעולה סינכרונית
const getUsersSync = () =>{
    const result = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    console.log("result", result);

}


//---------------------------------------------------

//פעולה אסינכרונית

const getUsersAsync1 = () =>{
    fs.readFile("./db.json" , "utf-8", (err, data) =>{
        if(err){
            console.log(err);
        }else console.log("data: ",JSON.parse(data))
    })
}

// פעןלה אסינכרונית עם תחביר חדש של אסניק

const getUsersAsync2 = async () =>{
    const readFile = util.promisify(fs.readFile);
    try{
        const data = await readFile("./db.json" ,"utf-8")
        console.log("data", JSON.parse(data));
    }catch(err){
        console.log(err)
    }
}


const main = () =>{
    console.log("Before");
    getUsersAsync2();
    console.log("After")
}

main();