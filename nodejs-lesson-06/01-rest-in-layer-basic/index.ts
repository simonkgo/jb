
import * as express from 'express';
import { ProductControler } from './products/product-controller';
import { EmployeeController } from './employees/employees-controller'

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
        this.app.use('/api/v1',new EmployeeController().router);
        this.app.listen(3002,() => console.log('server is now listen in port 3001'));

    }
}

new Server();