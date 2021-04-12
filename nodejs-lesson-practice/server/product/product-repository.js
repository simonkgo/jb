/*
    get - תביא את כל המוצרים
    save - תשמור את כל המוצרים
 */

const fs = require("fs").promises;

const get = async () => {
    try {
        const data = await fs.readFile("./database/products.json", "utf-8");
        return JSON.parse(data);

    } catch (err) {
        console.log(err)
        throw err;
    };
};

module.exports = {
    get
};