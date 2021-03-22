import { validate } from 'class-validator';
import * as express from 'express';
import {Product} from "./product";
import ProductsService from "./products-service";
import {NotFound, Forbidden, BadReq} from "../middleware/error-middleware";
import {Request, Response, NextFunction} from "express";


export class ProductsController {
    public router: express.Router;

    constructor(){
        this.router = express.Router();
        this.activateRoutes();
    };

    private activateRoutes() {
        this.router.get("/products/auth", this.auth);
        this.router.get("/products/bad", this.badReq);
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

    public async getOne(req:express.Request, res:express.Response, next:NextFunction){
        try{
            const id: number = +req.params.id;
            const product = await ProductsService.getOne(id);
            if(!product){
                next(new NotFound(`id ${id} not found`));
            }
            res.json(product);
        }catch(err){
            res.status(404).send(err.message)
        };
    };

    private async post(req:express.Request, res:express.Response){
        try{
            const {name,price,stock} = req.body;
            const product:Product = new Product(name,price,stock);
            const errors = await validate (product);
            console.log(errors);
            if(errors.length){
                res.status(404).json(errors);
                return;
            }
            const result: Product = await ProductsService.post(req.body);
            res.status(201).json(result);
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

    private async patch(req:express.Request, res:express.Response, next: express.NextFunction){
        try{
            const idParams: number = +req.params.id;
            const product: Product = req.body;
            product.id = idParams;
            const result = await ProductsService.patch(product);
            res.json(result);
        }catch(err){
            next(err);
        };
    }    
    public async auth(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            next(new Forbidden("you are going on a forbidden road"));
        } catch (err) {
            next(err);

        };
    };

    public async badReq(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            next(new BadReq("you are making a bad request"));
        } catch (err) {
            next(err);

        };
    };
    
};

