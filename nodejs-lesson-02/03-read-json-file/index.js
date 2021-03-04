<<<<<<< HEAD
const util = require("util");
const fs = require("fs");

const getUsersSync = () =>{
    const result = fs.readFileSync("./db.json");
=======
/*
    read json files
 */
const fs = require("fs");
const util = require("util");

/*
    ------ הפעולה סינכרונית ותתקע את המשך התוכנית עד שכל הקובץ לא ייקרא ------ 
    !fs.readFileSync(argument1, argument2);
    argument1 - file name;
    argument2 - text incoding;
*/
const getUsersSync = () => {
    const result = fs.readFileSync("./db.json", "utf-8");
>>>>>>> 6131052216383c5ccbc9a8e499551d4183bbb2cb
    console.log("result", JSON.parse(result));
};


<<<<<<< HEAD
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
=======
/*
    ------ פעולה אסינכרונית התוכנית תמשיך לרוץ תחביר של קולבק------ 
    !fs.readFile(argument1 , argument2 , callback)
    argument1 - file name;
    argument2 - text incoding;
    argument3 - callback function with 2 args err or data if all ok;
*/
const getUsersAsync1 = () => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        };
        console.log("data", JSON.parse(data));
    });
};


/*
    ---------------- פעולה אסינכרונית עם התחביר החדש של אסינק ---------------- 
    !fs.readFile(argument1 , argument2)
    argument1 - file name;
    argument2 - text incoding;
    promisify - פונקציה של נואד שיודעת להפוך תחביר קולבק לתחביר פרומיס אסינק אוויט
*/
const getUsersAsync2 = async () => {
    const readFileBlala = util.promisify(fs.readFile);
    try {
        const data = await readFileBlala("./db.json", "utf-8");
        console.log("data", JSON.parse(data));

    } catch (err) {
        console.log(err);
    };
};

const main = () => {
    console.log("Before read from json file");
    getUsersAsync2();
    console.log("After read from json file");
};
>>>>>>> 6131052216383c5ccbc9a8e499551d4183bbb2cb

main();