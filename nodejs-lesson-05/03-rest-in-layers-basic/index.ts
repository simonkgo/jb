import * as express from 'express'
import { ProductsController } from './products/products-controller'

export default class Server {
    public app: express.Application
    private ProductsController: ProductsController
    constructor() {
        this.activate()
    }

    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.listen(3000, () => { console.log("Listen on port 3000") })
        this.app.use("/api/v1", new ProductsController().router)
    }
}

new Server()