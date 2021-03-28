const fileUpload = require('express-fileupload');
const express = require('express');
const path = require('path');
const uuid = require('uuid');

const main = () => {
  const app = express();
  app.use(fileUpload());
  const frontendPath = path.join(__dirname, '../frontend');
  app.use(express.static(frontendPath));
  app.post('/upload-image', (req, res) => {
    try {
      if (!req.files) {
        req.status(400).send('missing image');
        return;
      }
      const { myImage } = req.files;
      const dotIndex = myImage.name.lastIndexOf('.');
      const extention = myImage.name.substr(dotIndex);
      const newFileName = uuid.v4() + extention;
      myImage.mv('./images/' + newFileName);
    } catch (error) {
      console.log(error);
      res.status(400).json('oopsi');
    }
  });
  app.listen(3000, console.log('running on 3000'));
};

main();
