const fs = require ("fs").promises;
const getUsersRepository1 = async()=>{
    try{
        const data = await fs.readFile("./db.json","utf-8");
        return data;
    }catch(err){
        throw err
    };
};

const getUsersService1 = async () =>{
    try{
        const result = await getUsersRepository1();
        console.log("result",result)
    }catch(err){
        throw err
    };
};

getUsersService1()