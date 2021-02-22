const fs = require('fs')
const appendData = require('./file')


const filename = './example.txt'
// fs.writeFileSync(filename, 'hello world')
// fs.appendFileSync(filename, '\n bye bye')
// fs.appendFileSync(filename, '\n bye bye man')


appendData('./example.txt', '\n its working!!')
const data = fs.readFileSync(filename, 'utf-8')
console.log(data);