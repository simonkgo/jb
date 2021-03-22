const express = require('express');
const path = require('path')
const app = express();

const main = () => {
    const publicFolderPath = path.join(__dirname,'./public/my-name.html');
   
   

    app.use('/api/v1/my-name',express.static(publicFolderPath));
    app.listen(3000, () => console.log('Server Is Runing In Port 3000'))
}

main()
