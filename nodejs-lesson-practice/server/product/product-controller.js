/*
    get
    post
    put
    patch
    delete
 */

const express = require("express");
const router = express.Router(); // יצירה של מנגנון ראוט עבור הקונטרולר;
const productsService = require("./product-service");

//GET: /api/v1/products - get all products;
router.get("/", async (req, res) => {
    try {
        const temp = await productsService.get();
        res.json(temp);

    } catch (err) {
        res.status(400).send(err);
    };
});

//GET: /api/v1/products/:id - get all products;

module.exports = router;


