
import * as express from 'express';
import { ProductControler } from './products/product-controller';
import { httpErorMiddeleware } from './middleware/eror-middleware';

export default class Server {
    public app:express.Application;
    private productcontroler:ProductControler;

    constructor(){
        this.activate()
    }

    activate(){
        this.app = express();
        this.app.use(express.json());
        this.app.use('/api/v1',new ProductControler().router);
        this.app.use(httpErorMiddeleware)
        this.app.listen(3002,() => console.log('server is now listen in port 3002'));

    }
}

new Server();