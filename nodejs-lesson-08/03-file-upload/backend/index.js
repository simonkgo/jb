/* -------------------------------------------------------------------------- */
/*                                 File Upload                                */
/* -------------------------------------------------------------------------- */

const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const uuid = require("uuid");

const main = () => {
  const app = express();

  // Serve frontend;
  const frontEndPath = path.join(__dirname, "../frontend");
  app.use(express.static(frontEndPath));

  // Middleware for getting files sent from the client
  app.use(fileUpload());
  app.post("/upload-image", (req, res) => {
    console.log(req.files);
    res.status(200).json("uploaded");

    try {
      if (!req.files) {
        res.status(400).send("Missing image...");
        return;
      }
      const { file_image } = req.files;
      // Give the index of dot ---> 67 in this case
      const dotIndex = file_image.name.lastIndexOf(".");
      // Give the extension after the dot include ---> .jpg
      const extension = file_image.name.substr(dotIndex);
      // Give some unic id + .jpg
      const newFileName = uuid.v4() + extension;
      // Save the file with new name inside images folder
      file_image.mv("./images/" + newFileName);
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  });
  //Send the image:
  //---;
  app.get("/images/:file_image", (req, res) => {
    try {
      //שליפה של שם התמונה שהקלייט ביקש;
      const imageName = req.params.file_image;

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
    }
  });

  //Server Listen on port 3000
  app.listen(3000, () => {
    console.log("Port 3000");
  });
};
main();
