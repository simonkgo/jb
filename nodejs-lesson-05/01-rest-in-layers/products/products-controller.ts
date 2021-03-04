import * as express from 'express';
import ProductsService from "./products-service";
import { Request, Response } from 'express';
import { Product } from "./product";

//!1;
export class ProductsController {

    //!1;
    private _router: express.Router;

    //!1;
    constructor() {
        
        //!1;
        this._router = express.Router();
        this.activaterouters();
    };

    //!1;
    private activaterouters() {
        this.all();
        // this.get();
        // this.post();
        // this.put();
    };

    /*
        1 this.router.get("/", async (request: Request, response: Response) => {}
        2 try catch
        3 return response "moishe say hi from the controller";
        4 create ProductsService.all();
    */

    //GET /api/products - get all products;
    //---;
    private all(): void {
        this.router.get("/", async (request: Request, response: Response) => {
            try {
                const products: Product[] = await ProductsService.all();
                response.json(products);
            }
            catch (err) {
                response.status(500).send(err.message);
            };
        });
    };


    //!1;
    get router(): express.Router {
        return this._router;
    };

    //!2 exersice;
    //GET /api/products/7 - get one product with id=7:
    //---;
    private get(): void {
        this.router.get("/:id", async (request: Request, response: Response) => {
            try {
                const id: number = +request.params.id;
                const product: Product = await ProductsService.get(id);
                if (!product) {
                    response.status(404).send(`id ${id} not found.`);
                    return;
                }
                response.json(product);
            }
            catch (err) {
                response.status(500).send(err.message);
            };
        });
    };

    //!3;
    //POST /api/products - add new product;
    //---;
    private post(): void {
        this.router.post("/", async (request: Request, response: Response) => {
            try {
                const product: Product = request.body;
                // const error = ProductValidator.post(product);
                // if (error) {
                //     response.status(500).send(error);
                //     return;
                // };

                const postedProduct: Product = await ProductsService.post(product);
                response.status(201).json(postedProduct);
            }
            catch (err) {
                response.status(500).send(err.message);
            };
        });
    };

    //!4 exersice;
    //PUT /api/products/7 - update full product of id=7;
    //---;
    private put(): void {
        this.router.put("/:id", async (request: Request, response: Response) => {
            try {
                const id: number = +request.params.id;
                const product: Product = request.body;
                product.id = id;

                const postedProduct = await ProductsService.put(product);
                response.json(product);
            }
            catch (err) {
                response.status(500).send(err.message);
            };
        });
    };
};