import * as express from "express";
import { EmployeesController } from "./employees/employees-controller";
export default class Server {
    public app: express.Application;
    // private EmployeesController: EmployeesController;
    public port: number;
    constructor (port) {
        this.port = port;
        this.activate();
    }
    
    public activate = () => {
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new EmployeesController().router);
        this.app.listen(this.port, ()=>{console.log(`Listening on http://localhost:${this.port}`)});
    }
}

new Server(3006);