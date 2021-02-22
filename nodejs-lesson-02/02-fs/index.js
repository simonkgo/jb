const fs = require('fs');

const filename = "my-file.txt";
fs.writeFileSync(filename,"Hello World");
fs.appendFileSync("my-file.txt","/n bye bye!");