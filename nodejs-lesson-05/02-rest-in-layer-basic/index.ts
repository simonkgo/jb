
import * as express from 'express';


import { ProductControler } from './products/product-controller'

export default class Server {
    public app:express.Application;
 
    constructor(){
        this.activate()
    }

    activate(){
        this.app = express();
        this.app.use(express.json());
        this.app.use('/api/v1',new ProductControler().router);
        this.app.listen(3000,() => console.log('server is listen in port 3000'));

    }
}

new Server();