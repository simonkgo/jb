import * as express from 'express'
import { Product } from "./product"
import ProductsService from './prducts-service'
import { validate } from 'class-validator';
import { NotFound, Forbidden, BadRequest } from '../middleware/error-middleware';

export class ProductsController {
    private _router: any;

    constructor() {
        this._router = express.Router();
        this.activateProductsControllerRoutes()
    };

    private activateProductsControllerRoutes() {
        this.router.get("/products", this.all)
        this.router.get("/products/:id", this.getOne)
        this.router.post("/products", this.post)
        this.router.put("/products/:id", this.put)
        this.router.patch("/products/:id", this.patch)
        this.router.get("/*", this.auth);
    }

    private async auth(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            next(new Forbidden(`Foridden`))
        } catch (err) {
            next(new BadRequest('Bad Request'))
        };
    };

    private async patch(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            const product: Product = req.body
            product.id = id
            const result: Product = await ProductsService.patch(product)
            res.json(result)
            if (!result) {
                next(new NotFound(`ID ${id} not found`))
            }

        } catch (err) {
            next(new BadRequest('Bad Request'))
        }
    }


    private async put(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            const product: Product = req.body
            product.id = id
            const result = await ProductsService.put(product)
            res.json(result)
            if (!result) {
                next(new NotFound(`ID ${id} not found`))
            }

        } catch (err) {
            next(new BadRequest('Bad Request'))
        }
    }
    private async post(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const { name, price, stock } = req.body
            const product: Product = new Product(name, price, stock)
            const errors = await validate(product)
            if (errors.length) {
                console.log("🚀 ~ file: products-controller.ts ~ line 53 ~ ProductsController ~ post ~ errors", errors)
                res.status(400).json(errors)
                return
            }
            const result: Product = await ProductsService.post(req.body)
            res.status(201).json(result)
        } catch (err) {
            next(new BadRequest('Bad Request'))
        }

    }
    private async getOne(req: express.Request, res: express.Response, next: express.NextFunction) {


        try {

            const id: number = +req.params.id
            const currentProduct = await ProductsService.getOne(id)
            if (!currentProduct) {
                next(new NotFound(`ID ${id} not found`))
            }
            res.json(currentProduct)

        } catch (err) {

            next(new BadRequest('Bad Request'))

        }
    }
    private async all(request: express.Request, response: express.Response, next: express.NextFunction) {

        try {

            const products = await ProductsService.all()
            if (!products) {
                response.status(404)

            }

            response.json(products)

        } catch (err) {

            next(new BadRequest('Bad Request'))

        };

    };

    get router() {
        return this._router;
    };
};