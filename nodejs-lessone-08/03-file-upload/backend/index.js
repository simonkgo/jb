const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const uuid = require('uuid')

const main = () => {
    const app = express()
    //serve from fronend
    const frontendPath = path.join(__dirname, '../frontend')
    app.use(express.static(frontendPath))
    //Middleware for getting files sent from the client;
    app.use(fileUpload());

    app.post("/upload-image", (req, res) => {
        //file object overview;
        console.log(req.files);

        try {
            if (!req.files) {
                res.status(400).send('missing image')
                return
            }
            const { myImage } = req.files//שולף את התמונה מתוך האובייקט בטופס 
            const theDotIndex = myImage.name.lastIndexOf('.')//המיקום של הנקודה בשם התמונה
            const extention = myImage.name.substr(theDotIndex)//מחזיר את המחרוזת אחרי הנקודה בלבד
            const newFileName = uuid.v4() + extention// בונה שם לתמונה עם איידי ובסוף הסיומת של התמונה 
            myImage.mv('./images/' + newFileName)//שומר את התמונה בתוך התיקייה שקבענו לתמונות
            console.log(newFileName);
        }
        catch (err) {
            console.log(err);
            res.status(400).json('oops')
        }
    });


    app.listen(3000, () => console.log('listening on port 3000'))
}

main()