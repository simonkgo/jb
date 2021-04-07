const express = require('express')
const router = express.Router() //יצירה של מנגנון ראוט עבור הקונטרולר
const productsService = require('./product-service')
const Product = require('./product-entity')

//get: /api/v1/products - get all products
router.get('/', async (req, res) => {
    try {
        const temp = await productsService.get()
        res.json(temp)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = +req.params.id
        const result = await productsService.getOne(id)
        if (!result) {
            res.status(404).send(`id with param ${id} not found`)
            return
        }
        res.json(result)

    }
    catch (err) {
        res.status(400).send(err)

    }
})


router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const updatedProductsList = await productsService.post(newProduct)
        res.status(201).json(updatedProductsList)
    }
    catch (err) {
        res.status(400).send(err)

    }
})

router.put('/:id', async (req, res) => {
    try {
        const idParam = +req.params.id
        const product = req.body
        product.id = idParam
        const updatedProductsList = await productsService.put(product)
        updatedProductsList === -1 ? res.status(404).json(`${idParam} is not  avalid id`) : res.status(201).json(updatedProductsList)
    }
    catch (err) {
        res.status(400).send(err)

    }
})

router.patch('/:id', async (req, res) => {
    try {
        const idParam = +req.params.id
        const product = req.body
        product.id = idParam
        const updatedProductsList = await productsService.patch(product)
        typeof updatedProductsList === 'undefined' ? res.status(404).json(`${idParam} is not  avalid id`) : res.status(201).json(updatedProductsList)
    }
    catch (err) {
        res.status(400).send(err)

    }

})

router.delete('/:id', async (req, res) => {
    try {
        const id = +req.params.id
        const result = await productsService.deleteId(id)
        if (!result) {
            res.status(404).send(`id with param ${id} not found`)
            return
        }
        res.sendStatus(204)

    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)

    }
})

module.exports = router