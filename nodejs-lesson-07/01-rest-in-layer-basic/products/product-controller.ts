import { validate } from 'class-validator';
import * as express from 'express';
import { Product } from './product';
import ProductServise from './productServise';
import { NotFound , Forbidden} from '../middleware/eror-middleware';


export class ProductControler {
    public router:express.Router;

    constructor(){
        this.router = express.Router();
        this.activateRoute();
    }
    
   private activateRoute(){
        this.router.get('/products/auth',this.auth);
        this.router.get('/products',this.getAll);
        this.router.get('/products/:id',this.oneId);
        this.router.post('/products',this.post);
        this.router.put('/products/:id', this.put);
        this.router.patch('/products/:id',this.patch);

   };
    private async auth(req:express.Request,res:express.Response,next:express.NextFunction){
      try {
          next(new Forbidden('forbbiden'))
      } catch (error) {
          res.status(400)
      }
    };
    private async getAll(req:express.Request,res:express.Response){
        try {
           const product:Product[] = await ProductServise.getAll()
           res.json(product);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };
    private async oneId(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const id:number = +req.params.id;
            const OneProduct:Product = await ProductServise.getOne(id)
            if(!OneProduct){
                next(new NotFound(`This ${id} id Is Not Exist`))
            }
           res.json(OneProduct);
        } catch (err) {
            res.status(500).send(err.message);
        };
    };
    private async post(req:express.Request,res:express.Response){
        try {
          const {name,price,stock} = req.body;
          const product:Product = new Product(name,price,stock);

         const errors = await validate(product);
         if(errors.length){
             res.status(400).json(errors);
             return
         }
         
          const resulte:Product = await ProductServise.saveAll(product);
          res.status(201).json(resulte)
        } catch (err) {
            res.status(500).send(err.message);
        };
    };

    private async put(req:express.Request,res:express.Response){
        try {
          const id:number = +req.params.id;
          const product:Product = req.body;
          product.id = id
          const update = await ProductServise.put(product)
          res.json(update)
        } catch (err) {
            res.status(500).send(err.message);
        };
    };
    
    private async patch(req:express.Request,res:express.Response){
        try {
            const id:number = +req.params.id;
            const product:Product = req.body;
            product.id = id;
            const update = await ProductServise.patch(product);
            res.json(update);
          res.json('update');
        } catch (err) {
            res.status(500).send(err.message);
        };
    };

};