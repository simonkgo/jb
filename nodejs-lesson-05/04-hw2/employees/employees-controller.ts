import * as express from "express";
import { Employee } from "./employee-model";
import EmployeesService from "./employees-service";

export class EmployeesController {
    private _router: any;

    constructor(){
        this._router = express.Router();
        this.activateRouters();
    }

    private activateRouters() {
        this._router.get("/employees", this.all);
        // this._router.get("/employees/:id", this.one);
        // this._router.post("/employees", this.post);
        // this._router.put("/employees/:id", this.put);
        // this._router.patch("/employees/:id", this.patch);
        // this._router.delete("/employees/:id", this.delete);
    }

    private all = async (request: express.Request, response: express.Response, next:express.NextFunction) => {
        try {
            const employees = await EmployeesService.all();
            response.json(employees);
        } catch (err) {
            response.status(400).send(err.message);
        }
    }

    get router () {
        return this._router()
    }
}