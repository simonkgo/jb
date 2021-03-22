const express = require('express')
const path = require('path')//מודול גלובלי השייך לנודגיאס

const main = () => {
    const app = express()
    const publicFolderPath = path.join(__dirname, './public')
    const myNamePath = path.join(__dirname, './public/my-name.html')
    console.log('path to load:', publicFolderPath);

    // app.use('/api/v1/my-project', express.static(publicFolderPath))



    app.use(express.static(publicFolderPath))
    app.use('/api/v1/myname', express.static(myNamePath))

    app.listen(3000, () => console.log('Listening on port 3000'))
}

main()