const fs = require('fs');

const util = require('util');

const getUser = () => {
fs.readFile('./db.json',{encoding:'utf-8'},(err,data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });
}
getUser();

const getUsetTwo = async () => {
const readFile = util.promisify(fs.readFile);
try {
    const data = await readFile('./db.json','utf-8');
    console.log(JSON.parse(data));
} catch (error) {
    console.log(error);
}

}
getUsetTwo()

