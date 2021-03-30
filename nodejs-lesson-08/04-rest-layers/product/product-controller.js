const express = require("express");
const productsService = require("./product-service");
const Product = require("./product-entity");

const router = express.Router(); // יצירה של מנגנון ראוט עבור הקונטרולר;

//GET: /api/products - get all products;
router.get("/", async (req, res) => {
    try {
        const products = await productsService.get();
        res.json(products);
    }
    catch (err) {
        res.status(500).send(err.message);
    };
});

//POST: /api/products - add new product;
router.post("/", async (req, res) => {
    try {

        const error = Product.validatePost(req.body)
        if (error) {
            res.status(400).send(error);
            return;
        }
        const addedProduct = await productsService.post(req.body);
        res.status(201).json(addedProduct);
    }
    catch (err) {
        res.status(400).send(err.message);
    };
});

//PATCH: /api/products/7 - update partial product of id=7;
router.patch("/:id", async (req, res) => {
    try {
        req.body.id = +req.params.id;
        const error = Product.validatePatch(req.body)
        if (error) {
            res.status(400).send(error);
            return;
        };
        const updatedProduct = await productsService.patch(req.body);
        if (!updatedProduct) {
            res.status(404).send(`id ${product.id} not found.`);
            return;
        };
        res.json(updatedProduct);
    }
    catch (err) {
        res.status(500).send(err.message);
    };
});

module.exports = router; // Expose only the router.





// // DELETE /api/products/7 - delete product of id=7:
// router.delete("/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         await productsLogic.deleteProduct(id);
//         response.sendStatus(204);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// module.exports = router; // Expose only the router.












// GET /api/products/7 - get one product with id=7:
// router.get("/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         const product = await productsLogic.getOneProductAsync(id);
//         if(!product) {
//             response.status(404).send(`id ${id} not found.`);
//             return;
//         }
//         response.json(product);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });



// PUT /api/products/7 - update full product of id=7:
// router.put("/:id", async (request, response) => {
//     try {
//         const product = new Product(request.body);
//         product.id = +request.params.id;
//         const error = product.validatePut();
//         if(error) {
//             response.status(400).send(error);
//             return;
//         }
//         const updatedProduct = await productsLogic.updateFullProduct(product);
//         if(!updatedProduct) {
//             response.status(404).send(`id ${product.id} not found.`);
//             return;
//         }
//         response.json(updatedProduct);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });