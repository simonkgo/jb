const express = require("express");
const cors = require("cors");
const products = [{ "id": 1, "name": "Moishe Ufnik" }, { "id": 2, "name": "Kipi Ben Kipod" }];

const main = () =>{
    const app = express();
    // app.use(cors()); //CORS enable all
    const corsOptions = {
        origin:["http://127.0.0.1:5500","http://someweb.com"]
    }
    let corsOptionsForSingleRoute  ={
        origin:"http://127.0.0.1:5500"
    }
    // app.use(cors(corsOptions));
    app.use(cors(corsOptionsForSingleRoute));
    // app.get("/api/v1/users", (req,res) => res.json(products));
    app.get("/api/v1/single-route-example", cors(corsOptionsForSingleRoute), (req,res) => res.json(products));

    app.listen(3000, () => console.log("listening to port 3000..."));
}

main();