const fileUpload = require('express-fileupload');
const express = require('express');
const path = require('path');
const uuid = require('uuid');

const main = () => {
  const app = express();
  app.use(fileUpload());
  const frontendPath = path.join(__dirname, '../frontend');
  app.use(express.static(frontendPath));
  app.post('/upload-summary', (req, res) => {
    try {
      if (!req.files) {
        req.status(400).send('missing image');
        return;
      }
      const { mySummary } = req.files;
      const dotIndex = mySummary.name.lastIndexOf('.');
      const extention = mySummary.name.substr(dotIndex);
      const newFileName = uuid.v4() + extention;
      mySummary.mv('./summaries/' + newFileName);
      res.json('File Uploaded');
    } catch (error) {
      console.log(error);
      res.status(400).json('oopsi');
    }
  });
  app.listen(3000, console.log('running on 3000'));
};

main();
