import * as express from 'express'
import { EmployeesController } from './employees/employees-controller'
import { httpErrorMiddleware } from './middleware/error-middleware'



export default class Server {
    public app: express.Application
    private employeesController: EmployeesController

    constructor() {
        this.activate()
    }
    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.use("/api/v2", new EmployeesController().router)
        this.app.use(httpErrorMiddleware)
        this.app.listen(3000, () => { console.log("Listen on port 3000") })
    }
}

new Server()