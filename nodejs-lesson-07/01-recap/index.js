const express = require("express");

const routeRecap = () =>{
    const app = express();
    app.get("/api/vi/products", (req,res,next)=>{
        res.json("yey");
    });
    app.listen(3000,()=> console.log("Listening to port 3000"));
};

const middlewareRecap1 = () =>{
    const app = express();

    app.use((req,res,next)=>{
        console.log("First step: Middleware");
        next();
    });

    app.get("/api/vi/products", (req,res,next)=>{
        console.log("Second step: Route - /api/vi/products")
        res.json("yey");
    });

    app.listen(3001,()=> console.log("Listening to port 3001"));
};

const middlewareRecap2 = () =>{
    const app = express();

    app.get("/api/vi/products", (req,res,next)=>{
        console.log("First step: Route - /api/vi/products")
        next();

    });

    app.use((req,res,next)=>{
        console.log("Second step: Middleware");
        res.json("yey");
    });

    app.listen(3001,()=> console.log("Listening to port 3001"));
};

const middlewareRecap3 = () =>{
    const app = express();

    app.get("/api/vi/products", (req,res,next)=>{
        console.log("First step: Route - /api/vi/products")
        next();
    });

    app.use((req,res,next)=>{
        console.log("Second step: Middleware");
        res.json("yey");
    });

    app.listen(3001,()=> console.log("Listening to port 3001"));
}

const middlewareRecap4 = () =>{
    const app = express();

    app.get("/api/vi/products", (req,res,next)=>{
        console.log("First step: Route - /api/vi/products")
        next("oh no!");
    });

    app.use((err,req,res,next)=>{
        console.log("Second step: Middleware");
        res.json("yey");
    });

    app.listen(3001,()=> console.log("Listening to port 3001"));
}

const middlewareRecap5 = () =>{
    const app = express();

    app.get("/api/vi/products", (req,res,next)=>{
        console.log("First step: Route - /api/vi/products")
        next("oh no!");
    });
    const myError = new Error("oh no no no !")

    app.use((err,req,res,next)=>{
        console.log("Second step: Middleware");        
        res.json(`${myError.name} ${myError.message}`);
    });

    app.listen(3000,()=> console.log("Listening to port 3000"));
}

const solutionEX01 = () =>{
    const app = express();

    app.get("/api/vi/products", (req,res,next)=>{
        const myError = new Error("oh no no no !");
        next(myError);
    });

    app.use((err,req,res,next)=>{
        res.status(400).json(`${myError.name} ${myError.message}`);
    });

    app.use((err,req,res,next)=>{
            const error = {
                name:err.name,
                message:err.message
            };
        res.status(400).json({error})
    });

    app.listen(3000,()=> console.log("Listening to port 3000"));
}
// routeRecap();
// middlewareRecap1();
// middlewareRecap2();
// middlewareRecap3();
// middlewareRecap4();
// middlewareRecap5();
solutionEX01();



