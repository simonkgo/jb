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
        this.router.get("/products/:id", this.getOne);
        this.router.post("/products", this.post);
        this.router.put("/products/:id", this.put);
        this.router.patch("/products/:id", this.patch);
    };

    private async all(req:express.Request, res:express.Response){
        try{
            const products = ProductsService.all();
            res.json(products);
        }catch(err){
            res.status(404).send(err.message)
        }
    }

    public async getOne(req:express.Request, res:express.Response){
        try{
            const id: number = +req.params.id;
            const product = await ProductsService.getOne(id);
            if(!product){
                res.status(404).send(` id ${id} not found`)
            }
            res.json(product);
        }catch(err){
            res.status(404).send(err.message)
        };
    };

    private async post(req:express.Request, res:express.Response){
        try{
            const product: Product = await ProductsService.post(req.body);
            res.status(201).json(product);
        }catch(err){
            res.status(404).send(err.message);
        };
    };

    private async put(req:express.Request, res:express.Response){
        try{
            const idParams: number = +req.params.id;
            const product: Product = req.body;
            product.id = idParams;
            const result = await ProductsService.put(product);
            res.json(result);
        }catch(err){
            res.status(404).send(err.message);
        };
    }

    private async patch(req:express.Request, res:express.Response){
        try{
            const idParams: number = +req.params.id;
            const product: Product = req.body;
            product.id = idParams;
            const result = await ProductsService.patch(product);
            res.json(result);
        }catch(err){
            res.status(404).send(err.message);
        };
    }
};

