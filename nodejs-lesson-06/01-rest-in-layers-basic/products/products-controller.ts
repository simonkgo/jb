import * as express from 'express';
import ProductsService from "./products-service";
import { Product } from './product';
import { validate } from 'class-validator';
import { NotFound, Forbiden } from '../middleware/error-middleware';

export class ProductsController {
    //אובייקט מסוג ראוט של אספרס שיכיל את הנתיבים עבור הפרודוקס;
    //---;
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    };

    //פונקציה שמאתחלת את אובייקט הראוטר של אקספרס ומצרפת פונקציה שתטפל בבקשה עבור כל נתיב;
    //---;
    private routes() {
        this.router.get("/products", this.all);
        this.router.get("/products/:id", this.getOne);
        this.router.post("/products", this.post);
        this.router.put("/products/:id", this.put);
        this.router.patch("/products/:id", this.patch);
    };

    //GET /api/products - ונקציה שתחזיר את כל המוצרים;
    //---;
    private async all(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const products: any = await ProductsService.all();
            res.json(products);
        } catch (err) {
            next(err);
        };
    };

    //GET /api/products/7 - get one product with id=7:
    //---; 
    private async getOne(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id;
            const product = await ProductsService.getOne(id);
            if (!product) {
                next(new NotFound(`id ${id} not found`));
                // res.status(404).send(`id ${id} not found`);
            };

            res.json(product);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };

    //POST /api/products - add new product;
    //---;
    private async post(req: express.Request, res: express.Response) {
        try {
            const { name, price, stock } = req.body;
            const product: Product = new Product(name, price, stock);

            //הפעלה של פונקציה שמגיעה מתוך הסיפריה - שתחזיר הודעות ולידציה אם יהיו;

            const errors = await validate(product, {groups: ['shmuelTheKing']});
            console.log(errors);



            if (errors.length) {
                res.status(400).send(errors);
                return;
            };

            const result: Product = await ProductsService.post(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };

    //PUT /api/products/7 - full update on product with id=7:
    //---; 
    private async put(req: express.Request, res: express.Response) {
        try {
            const idParam: number = +req.params.id;
            const product: Product = req.body;
            product.id = idParam;

            const result: Product = await ProductsService.put(product);
            res.json(result);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };

    //PATCH /api/products/7 - partial update on product with id=7:
    //---; 
    private async patch(req: express.Request, res: express.Response) {
        try {
            const { name, price, stock } = req.body;
            const product =  new Product(name, price, stock)

            const errors = await validate(product, {groups: ['shmuelTheKing']});
            console.log(errors);


            const result: Product = await ProductsService.patch(product,);
            res.json(result);
        } catch (err) {
            res.status(400).send(err.message);
        };
    };
};
