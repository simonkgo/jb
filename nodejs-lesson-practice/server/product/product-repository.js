const fs = require("fs").promises;

const get = async ()=>{
    try{
        const data = await fs.readFile("./database/products.json","utf-8");
        return JSON.parse(data);

    }catch(err){
        throw err
    }
}

const saveAll = async (products)=>{
    try{
        return fs.writeFile("./database/products.json",JSON.stringify(products));

    }catch(err){
        throw err
    }
}

module.exports = {
    get,
    saveAll
};