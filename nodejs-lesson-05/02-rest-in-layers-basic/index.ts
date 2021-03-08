import * as express from "express";
import {ProductsController} from "./product/products-controller"

export default class Server{
    public app: any;//express.Application;

    constructor(){
        this.activate();
    }

    activate(){
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new ProductsController().router);
        this.app.listen(3000, () =>{console.log("listening on port 3000")});
    };

}

new Server();