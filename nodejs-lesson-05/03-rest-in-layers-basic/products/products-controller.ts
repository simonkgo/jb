import * as express from "express";
import { Product } from "./product";

export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this.activateRouters();
    }

    private activateRouters() {
        this._router.get("/");
    }

    private async all(request, response, next) {
        try {

        } catch (err) {
            response.status(500).send(err.message);
        }
    }

    get router(){
        return this._router;
    };
}
