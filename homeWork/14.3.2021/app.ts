import * as express from 'express'
import { EmployeesController } from './employees/employees-controller'


export default class Server {
    public app: express.Application
    private employeesController: EmployeesController

    constructor() {
        this.activate()
    }
    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.listen(3000, () => { console.log("Listen on port 3000") })
        this.app.use("/api/v2", new EmployeesController().router)
    }
}

new Server()