import * as express from 'express';
import { Product } from './product';
import productServise from './productServise';
import ProductServise from './productServise';

export class ProductControler {
    public router:express.Router;

    constructor(){
        this.router = express.Router();
        this.activateRoute();
    }
    
   private activateRoute(){
        this.router.get('/products',this.getAll);
        this.router.get('/products/:id',this.oneId);
        this.router.post('/products',this.post);
        this.router.put('/products/:id', this.put);
        this.router.patch('/products/:id',this.patch)
   };

    private async getAll(req:express.Request,res:express.Response){
        try {
           const product = await ProductServise.getAll()
           res.json(product);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };
    private async oneId(req:express.Request,res:express.Response){
        try {
            const id:number = +req.params.id;
            const OneProduct = await ProductServise.getOne(id)
            if(!OneProduct){
                res.status(404).send(`This ${id} id Is Not Exist`)
            }
           res.json(OneProduct);
        } catch (err) {
            res.status(500).send(err.message);
        };
    };
    private async post(req:express.Request,res:express.Response){
        try {
          const prodoct:Product = await ProductServise.saveAll(req.body);
          res.status(201).json(prodoct)
        } catch (err) {
            res.status(500).send(err.message);
        };
    };

    private async put(req:express.Request,res:express.Response){
        try {
          const id:number = +req.params.id;
          const product:Product = req.body;
          product.id = id
          const update = await productServise.put(product)
          res.json(update)
        } catch (err) {
            res.status(500).send(err.message);
        };
    };
    
    private async patch(req:express.Request,res:express.Response){
        try {
            const id:number = +req.params.id;
            const product:Product = req.body;
            product.id = id
            const update = await productServise.patch(product)
            res.json(update)
          res.json('update')
        } catch (err) {
            res.status(500).send(err.message);
        };
    };

};