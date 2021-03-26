/*
    File Upload
     ---------------------------- הקליינט יראה כך ---------------------------- 
    ? enctype="multipart/form-data" מה שמודיע לפורם שעליו לשלוח את התמונה הבחורה
    <form action="/upload-image" method="POST" enctype="multipart/form-data">
        ? אינפוט מיוחד שפותח חלון לבחירה תמונה במחשב ומאפשר לבחור תמונה
        <input type="file" name="myImage" accept="image/*"> 
        ? בלחיצה על הכפור התמונה תשלח לשרת 
        <button>Send</button>
    </form>

    אומר לדפדפן שהאינפוט הזה יעלה קובץ type="file״
    זה השם שניגש לתמונה בשרתname="bestImage"
    form חייב להיות בתוך  <button>Send</button>
    
    ------------------------------ השרת יראה כך ----------------------------- 
    נשתמש בסיפריה
    const fileUpload = require("express-fileupload");

    נבנה נתיב מיוחד 
    app.post("/upload-image", (req, res) => {})

    נשלוף אותה מקובץ הבקשה 
    req.params
    req.body
    req.files - אובייקט שמכיל את הקבצים שנשלחו בבקשה

    ניתן שם לתמונה ונתיב איפה לשמור אותה וזהו
    ---
 */
const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const uuid = require("uuid");

const main = () => {
    const app = express();

    //Serve index.html;
    const frontendPath = path.join(__dirname, "../frontend");
    app.use(express.static(frontendPath));

    //Middleware for getting files sent from the client;
    //mv מוסיף פונציקה - הפונקציה אחראית על כיבת הקובץ לתוך הנתיב שתקבל
    app.use(fileUpload());

    app.post("/upload-image", (req, res) => {
        //file object overview;
        console.log(req.files);

        try {
            if (!req.files) {
                res.status(400).send("Missing image...");
                return;
            };
            //נשלוף את התמונה מתוך אובייקט שמכיל קבצים בטופס הבקשה;
            const { myImage } = req.files;

            //המיקום של הנקודה בשם התמונה;
            const theDotIndex = myImage.name.lastIndexOf("."); //image1.jpeg; -> will result 6;

            //יחזיר את המחרוזת שאחרי הנקודה בלבד;
            const extention = myImage.name.substr(theDotIndex); //image1.jpeg -> .jpeg;

            //יבנה שם לתמונה עם אידי מיוחד ויוסיף בסוף את סיומת של התמונה;
            const newFileName = uuid.v4() + extention; // -> some-iddsjbcewkh32uehe2387.jpeg;

            //ישמור את התמונה בתיקיה התמונות;
            myImage.mv("./images/" + newFileName); // ./images/some-iddsjbcewkh32uehe2387.jpeg

        } catch (err) {
            console.log(err);
            res.status(400).json("Oopsi..")
        };
    });

    //GET the image:
    //---;
    app.get("/images/:imageNameParam", (req, res) => {
        try {
            //שליפה של שם התמונה שהקלייט ביקש;
            const imageName = req.params.imageNameParam;

            //בניה של הנתיב לתמונה;
            const imagePath = path.join(__dirname, "./images", imageName);

            //שליחת התמונה לקלייט;
            res.sendFile(imagePath);
            
        } catch (err) {
            console.log("err", err);
            res.status(400).json("Ooopsi...");
        }
    });

    app.listen(3000, () => console.log("Listening..."));
};
main();



