// npm i express, @types/express

import * as express from 'express';
import { ProductsController } from './products/products-controller';
export default class Server {
    public app: express.Application
    public port: number;
    constructor(port){
        this.port = port
        this.activate();
    }
    public activate = () => {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new ProductsController().router)
        this.app.listen(this.port, ()=>{console.log(`listening on http://localhost:${this.port}/api/v1/products`)})
    }
}

new Server(3000);