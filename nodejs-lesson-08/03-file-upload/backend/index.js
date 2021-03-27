const express = require("express");
const path = require("path");  //refers to paths of files
const fileUpload = require("express-fileupload"); //adding the mv function
const uuid = require("uuid"); //changing the files name

const main = () =>{
    const app = express();

    const frontendPath = path.join(__dirname, "../frontend");
    app.use(express.static(frontendPath));
    app.use(fileUpload());
    

    app.post("/upload-image", (req,res) => {
        console.log(req.files);
        try{
            if(!req.files){
                res.status(400).send("Missing image...");
                return;
            };
            const {myImage} = req.files;
            
            const theDotIndex = myImage.name.lastIndexOf("."); 
            //return === 6

            const extension = myImage.name.substr(theDotIndex); 
            //return === .jpeg;

            const newFileName = uuid.v4() + extension
            //changing the file name with the ending .jpeg, 
            //return === shgfkwehgrkwrgiy74yeh.jpeg;

            myImage.mv("./images/" + newFileName);
            //mv is a function created to every file we upload , because of the file-upload library
            //it creat a path with the file "images" joined with the new name of the file

        }catch(err){
            console.log(err);
            res.status(400).json("oh no!")
        }
    });

    //Send the image:
    //---;
    app.get("/images/:imageName", (req, res) => {
        try {
            //שליפה של שם התמונה שהקלייט ביקש;
            const imageName = req.params.imageName;

            //בניה של הנתיב לתמונה;
            const imagePath = path.join(__dirname, "./images", imageName);

            //שליחת התמונה לקלייט;
            res.sendFile(imagePath);
            /*
                ? will res.json/send work? 
                ? will res.sendFile("some text"); work?
             */

        } catch (err) {
            console.log("err", err);
            res.status(400).json("Ooopsi...");
        };
    });


    app.listen(3000, () => console.log("listening to port 3000..."));
}
main();