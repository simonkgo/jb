import * as express from 'express'
import { Product } from "./product"
import ProductsService from './prducts-service'
export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this.activateProductsControllerRoutes()
    };

    private activateProductsControllerRoutes() {
        this.router.get("/products", this.all)
        this.router.get("/products/:id", this.getOne)
        this.router.post("/products", this.post)
        this.router.put("/products/:id", this.put)
        this.router.patch("/products/:id", this.patch)
    }

    private async patch(req: express.Request, res: express.Response) {
        try {
            const id: number = +req.params.id
            const product: Product = req.body
            product.id = id
            const result: Product = await ProductsService.patch(product)
            res.json(result)


        } catch (err) {
            throw err
        }
    }


    private async put(req: express.Request, res: express.Response) {
        try {
            const id: number = +req.params.id
            const product: Product = req.body
            product.id = id
            const result = await ProductsService.put(product)
            res.json(result)

        } catch (err) {
            throw err
        }
    }
    private async post(req: express.Request, res: express.Response) {
        try {
            const product: Product = await ProductsService.post(req.body)
            res.status(201).json(product)
        } catch (err) {
            throw err
        }

    }
    private async getOne(req: express.Request, res: express.Response) {


        try {

            const id: number = +req.params.id
            const currentProduct = await ProductsService.getOne(id)
            if (!currentProduct) {
                res.status(404)
            }
            res.json(currentProduct)

        } catch (err) {

            console.log(err)
            res.status(400).send(err.message)

        }
    }
    private async all(request: express.Request, response: express.Response, next) {

        try {

            const products = await ProductsService.all()
            if (!products) {
                response.status(404)

            }

            response.json(products)

        } catch (err) {

            console.log(err)
            response.status(400).send(err.message);

        };

    };

    get router() {
        return this._router;
    };
};