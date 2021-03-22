const fs = require("fs").promises;

const getUser = async () => {
    try {
        const data  = await fs.readFile('./db.json','utf-8')
        return data
    } catch (err) {
        throw arr
    }
}

const getUser1 = async () => {
    try {
        const data = await getUser();
        console.log(data);
    } catch (err) {
        throw arr
    }
}

getUser1()