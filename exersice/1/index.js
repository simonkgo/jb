const fs = require ('fs');

const append = require('../1/file');

append.appedData('appedData.txt','\nI Create New File And Content');
const content = fs.readFileSync('appedData.txt','utf-8');
console.log(content);