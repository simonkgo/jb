import * as express from 'express'
import { EmployeesController } from './employees/employees-controller'

export default class Server {
    public app: express.Application
    constructor() {
        this.activate()
    }
    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.use("/api/v1", new EmployeesController().router)
        this.app.listen(3000, () => { console.log("Listen on port 3000") })
    }
}

new Server()