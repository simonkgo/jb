
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'pruduction'){
    global.config = require('./prod.json');
}else {
    global.config = require('./dev.json');
}
console.log(`${global.config.database.name}`);

