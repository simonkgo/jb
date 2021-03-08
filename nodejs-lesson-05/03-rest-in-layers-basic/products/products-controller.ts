import * as express from "express";
import { Product } from "./product";
import * as fs from "fs";

export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this.activateRouters();
    }

    private activateRouters() {
        this._router.get("/products", this.all);
    }

    private async all(request, response, next) {
        try {
            // const products = fs.readFileSync("../database/products.json");
            const products = "hi"
            console.log(products)
            response.json(products)
        } catch (err) {
            response.status(500).send(err.message);
        }
    }

    get router(){
        return this._router;
    };
}
