import * as express from "express";
import { Product } from "./product";
import * as fs from "fs";
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

    get router() {
        return this._router;
    }
}
