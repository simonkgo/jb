import * as express from "express";
import { Product } from "./product";
import ProductsService from "./products-service";

export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this.activateRouters();
    }

    private activateRouters() {
        this._router.get("/products", this.all);
        this._router.get("/products/:id", this.one);
        this._router.post("/products", this.post);
        this._router.put("/products/:id", this.put)
        this._router.patch("/products/:id", this.patch)
        this._router.delete("/products/:id", this.delete)
    }

    private all = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const products = await ProductsService.all();
            response.json(products);
        } catch (err) {
            response.status(400).send(err.message);
        }
    };

    private one = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const id = +request.params.id;
            const product = await ProductsService.one(id);
            if (!product) {
                response.status(400).send(`ID ${id} not found`);
            }
            response.json(product);
        } catch (err) {
            response.status(400).send(err.message);
        }
    };

    private async post(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            const product: Product = await ProductsService.post(request.body);
            response.status(201).json(product);
        } catch (err) {
            response.status(400).send(err.message);
        }
    }

    private async put(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            const id = +request.params.id;
            const product: Product = request.body;
            product.id = id;
            const result = await ProductsService.put(product);
            response.status(201).json(result);
        } catch (err) {
            response.status(400).send(err.message);
        }
    }

    private async patch(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            const id = +request.params.id;
            const product: Product = request.body;
            product.id = id;
            const result = await ProductsService.patch(product);
            response.status(201).json(result);
        } catch (err) {
            response.status(400).send(err.message);
        }
    }

    private async delete(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            const id = +request.params.id;
            const products = await ProductsService.delete(id);
            response.status(201).json(products);
        } catch (err) {
            response.status(400).send(err.message);
        }
    }

    get router() {
        return this._router;
    }
}
