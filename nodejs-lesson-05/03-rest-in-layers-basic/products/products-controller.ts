import * as express from 'express';
import { Product } from './product';

export class ProductsController {
    public router: any;

    constructor() {
        this.router = express.Router();
        this.router.get("/products", this.all)
    };

    private async all(request, response, next) {
        try {
            response.json("ok");
        } catch (err) {
            console.log(err);
        };
    };
};