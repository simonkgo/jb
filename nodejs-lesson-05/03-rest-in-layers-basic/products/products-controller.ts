import * as express from 'express'
import { Product } from "./product"

export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this._router.get("/products", this.all)
    };

    private async all(request, response, next) {
        try {
            response.json("ok")
        } catch (err) {
            console.log(err)
            response.status(500).send(err.message);
        };
    };

    get router() {
        return this._router;
    };
};