const express = require("express"); //need to export from npm
const path = require("path"); //it's global no need to import

const main = ()=>{
    const app = express();
    //we are using "__dirname" which is a global module in JS 
    //__dirname is a variable which gives the current working file

    const publicFolderPath = path.join(__dirname, "./public"); 
    //line 9 join the current folder with the folder named "global" that we created
    console.log("publicFolderPath", publicFolderPath)

    app.use(express.static(publicFolderPath));

/*
    ?Exersice;
    create new route /api/v1/my-project;
    when client will req that url - serve to the client the public folder;
    (same as we did but this time only for that route);
 */
    app.use("/api/vi/products", express.static(publicFolderPath));

/*
?Exersice Challenge;
    add new file my-name.html and add to it new tag h1 with your name;
    create new route route /api/v1/my-name;
    when client will req that url - serve to the client the file that you had created (my-index.html);
*/
    const publicFolderPath2 = path.join(__dirname, "./public/my-name.html"); 
    app.use("/api/v1/my-name", express.static(publicFolderPath2));
    console.log("publicFolderPath2", publicFolderPath2);

    //line 12 using "static" which building the web by using the files from "public" folder
    app.listen(3000, ()=> console.log("listening on port 3000..."));
}

main ();


