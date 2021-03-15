import * as express from 'express'
import { httpErrorMiddleware } from './middleware/error-middleware'
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
        this.app.use("/api/v1", new ProductsController().router)
        this.app.use(httpErrorMiddleware)
        this.app.listen(3000, () => { console.log("Listen on port 3000") })
    }
}

new Server()