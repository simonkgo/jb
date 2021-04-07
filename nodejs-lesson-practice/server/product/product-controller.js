const express = require("express");
const productService = require("./product-service");

const router = express.Router();

router.get("/", async (req,res) =>{
    try{
        const temp = await productService.get();
        res.json(temp);

    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/:id", async (req,res) =>{
    try{
        const id = +req.params.id;
        const product = await productService.getOne(id);
        if(!product){
            res.status(404).send(`id with the number ${id} not found`);
            return;
        }
        res.json(product);
    }catch(err){
        res.status(400).send(err);
    }
})

router.delete("/:id", async (req,res) =>{
    try{
        const id = +req.params.id;
        await productService.deleteOne(id);
        res.sendStatus(204);
        if(!product){
            res.status(404).send(`id with the number ${id} not found`);
            return;
        }
        
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch("/:id", async (req,res) =>{
    try{
        const id = +req.params.id;
        const product = req.body;
        product.id = id;
        const result = await productService.patch(product);
        if(!id){
            res.status(404).send(`id with the number ${id} not found`);
            return;
        }
        res.json(result);
        console.log(result,"controller");
    }catch(err){
        res.status(400).send(err.message);
    }

})

router.put("/:id", async (req,res) =>{
    try{
        const id = +req.params.id;
        const product = req.body;
        product.id = id;
        const result = await productService.put(product);

        if(!product){
            res.status(404).send(`id with the number ${id} not found`);
            return;
        }
        res.json(result)
    }catch(err){
        res.status(400).send(err);
    }
})

router.post("/", async (req,res) =>{
    try{
        const product = req.body;
        const result = await productService.post(product);
        res.status(201).json(product);
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;