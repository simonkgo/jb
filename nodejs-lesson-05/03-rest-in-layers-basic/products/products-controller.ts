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
        console.log("1");
        this._router.get("/products", this.all);
        console.log("3");
    }

    private all = async (request, response, next) => {
        console.log("2");
        try {
            const products = JSON.parse(fs.readFileSync("./database/products.json", "utf-8"));
            console.log(products);
            response.json(products);
        } catch (err) {
            response.status(500).send(err.message);
        }
    };

    get router() {
        return this._router;
    }
}
