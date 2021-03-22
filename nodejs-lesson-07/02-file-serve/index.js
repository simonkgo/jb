const express = require("express");
const path = require("path");

const main = () => {
    const app = express();
    // בניית נתיב של התיקיה שמכילה את הקבצים
    const publicFolderPath = path.join(__dirname, "./public");
    console.log("publicFolderPath:", publicFolderPath);

    // רישום של התיקייה למידלוור המיוחד שיספק את הקבצים לקליינט
    app.use(express.static(publicFolderPath));

    app.listen(3000, () => console.log("1 -", "http://localhost:3000"));

};
main();

/*
    Exersice 1;
    create new route /api/v1/my-project;
    when client will req that url - serve to the client the public folder;
    (same as we did but this time only for that route);
 */

const classExercise1 = () => {
    const app = express();
    const publicFolderPath = path.join(__dirname, "./public");

    app.use("/api/v1/my-project", express.static(publicFolderPath));

    app.listen(4000, () => console.log("2 -","http://localhost:4000"));
};
classExercise1();

// Exersice Challenge 2;
//     add new file my-name.html and add to it new tag h1 with your name;
//     create new route route /api/v1/my-name;
//     when client will req that url - serve to the client the file that you had created (my-index.html);

const classExercise2 = () => {
    const app = express();
    const publicFolderPath1 = path.join(__dirname, "./public/my-name.html");
    app.use("/api/v1/my-name.html", express.static(publicFolderPath1));

    app.listen(5000, () => console.log("3 -","http://localhost:5000"));
};
classExercise2();
