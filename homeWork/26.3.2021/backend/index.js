const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const uuid = require("uuid");

const main = () => {
  const app = express();
  const frontEndPath = path.join(__dirname, "../frontend");
  app.use(express.static(frontEndPath));
  app.use(fileUpload());
  app.post("/upload-doc", (req, res) => {
    console.log(req.files);

    try {
      if (!req.files) {
        res.status(400).send("Doc Missing...");
      }
      const { doc_file } = req.files;
      const dotIndex = doc_file.name.lastIndexOf(".");
      const extension = doc_file.name.substr(dotIndex);
      const newFileName = uuid.v4() + extension;
      if (
        extension === ".docx" ||
        extension === ".pdf" ||
        extension === ".doc"
      ) {
        doc_file.mv("./docs/" + newFileName);
      } else {
        console.log("wrong type of file !");
        res.status(400);
        return;
      }
    } catch (err) {
      console.log(err);
      res.status(400);
    }
    res.status(200).json("Uploaded");
  });
  app.listen(3000, () => {
    console.log("Port 3000");
  });
};
main();
