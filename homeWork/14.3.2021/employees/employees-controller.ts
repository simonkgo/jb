import * as express from 'express'
import { Employee } from './employee';
import EmployeesService from './employees-service'


export class EmployeesController {
    private _router: any

    constructor() {
        this._router = express.Router()
        this.activateEmployeesControllerRouter()
    }

    get router() {
        return this._router;
    };

    private activateEmployeesControllerRouter() {
        this.router.get("/employees", this.all)
        this.router.get("/employees/:id", this.one)
        this.router.post("/employees", this.post)
        this.router.put("/employees/:id", this.put)
        this.router.patch("/employees/:id", this.patch)
        this.router.delete("/employees/:id", this.delete)
    }

    private async all(req: express.Request, res: express.Response) {

        try {

            const employees = await EmployeesService.all()

            if (!employees) {

                res.status(404)

            }

            res.json(employees)

        } catch (err) {

            res.status(400).send(err.message);

        }

    }

    private async one(req: express.Request, res: express.Response) {
        try {
            const id = +req.params.id
            const employee = await EmployeesService.getOne(id)
            if (!employee) {
                res.status(404)
            }
            res.json(employee)

        } catch (err) {
            res.status(400).send(err.message)
        }
    }

    private async post(req: express.Request, res: express.Response) {
        try {
            const employee: Employee = await EmployeesService.postOne(req.body)
            if (!employee) {
                res.status(404)
            }
            res.status(201).json(employee)
        } catch (err) {
            throw err
        }
    }
    private async put(req: express.Request, res: express.Response) {
        try {
            const id: number = +req.params.id
            const employee: Employee = req.body
            employee.id = id
            const currentEmployee = await EmployeesService.updateOne(employee)
            res.json(currentEmployee)
        } catch (err) {
            throw err
        }
    }
    private async patch(req: express.Request, res: express.Response) {
        try {
            const id: number = +req.params.id
            const employee: Employee = req.body
            employee.id = id
            const currentEmployee = await EmployeesService.partlyUpdate(employee)
            res.json(currentEmployee)
        } catch (err) {
            throw err
        }
    }
    private async delete(req: express.Request, res: express.Response) {
        try {
            const id: number = +req.params.id
            const result = await EmployeesService.deleteOne(id)
            res.status(204).json("Deleted")
        } catch (err) {
            throw err
        }

    }

}