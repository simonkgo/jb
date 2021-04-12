import * as express from 'express'
import Employee from './employee'
import EmployeesService from './employees-service'
import { validate } from 'class-validator';




export class EmployeesController {
    private _router: any

    constructor() {
        this._router = express.Router()
        this.activateEmployeesControllerRoutes()
    }

    get router() {
        return this._router;

    };

    private activateEmployeesControllerRoutes() {
        this.router.get("/employees", this.getAll)
        this.router.post("/employees", this.postNewEmployee)
        this.router.delete("/employees/:id", this.delEmployee)
        this.router.use(this.DelMiddleware)
        this.router.use(this.logMiddleware)
    }

    private async getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const employees = await EmployeesService.getAll()
            if (!employees) {
                res.status(404)
            }
            res.json(employees)
            next()
        } catch (err) {
            throw err
        }
    }

    private async postNewEmployee(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const { firstName, lastName, title, country, city, birthDate, imageName } = req.body
            const employee: Employee = new Employee(firstName, lastName, title, country, city, birthDate, imageName)
            const errors = await validate(employee)
            if (errors.length) {
                res.status(400).json(errors)
                return
            }
            const result: Employee = await EmployeesService.post(req.body)
            res.status(201).json(result)
            next()
        } catch (err) {
            throw err
        }
    }

    private async delEmployee(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            await EmployeesService.delEmployee(id)
            res.status(204).json("Deleted")
            next(id)
        } catch (err) {
            throw err
        }
    }
    private DelMiddleware(err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(`User is going to delete employee ${err}`)
        next()
    }

    private async logMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
        const log = {
            method: req.method,
            path: req.route.path,
            date: new Date()
        }
        await EmployeesService.saveToLog(log)
    }
}
