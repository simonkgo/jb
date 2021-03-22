const express = require("express");
const path = require("path");

const main = () => {
  const app = express();

  const publicFolderPath = path.join(__dirname, "./public");
  const myNameFolderPath = path.join(__dirname, "./public/my-name.html");

  app.use(express.static(publicFolderPath));
  app.use("/api/v1/my-name", express.static(myNameFolderPath));
  //   app.use("/api/v1/my-project", express.static(publicFolderPath));

  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
};

main();
