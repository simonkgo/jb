const fs = require('fs').promises // הפרומיס מאפשר לנו את היכולת של האסינק אוויט

const get = async () => {
    try {
        const data = await fs.readFile('./database/products.json', "utf-8")
        return JSON.parse(data)


    }
    catch (err) {
        throw err
    }
}

const saveAll = async (result) => {
    try {
        return fs.writeFile('./database/products.json', JSON.stringify(result))

    }
    catch (err) {
        throw err
    }
}
//תמיד צריך לייצא
module.exports = {
    get, saveAll
}