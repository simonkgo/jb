import * as express from 'express';
import {Product} from "./product";
import ProductsService from "./products-service";

export class ProductsController {
    public router: express.Router;

    constructor(){
        this.router = express.Router();
        this.activateRoutes();
    };

    private activateRoutes() {
        this.router.get("/products", this.all);
    };

    private async all(req:express.Request, res:express.Response){
        try{
            const products = ProductsService.all();
            res.json(products);
        }catch(err){
            res.status(404).send(err.message)
        }
    }
}

