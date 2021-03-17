import { validate } from 'class-validator';
import * as express from 'express'
import { BadRequest, NotFound } from '../middleware/error-middleware';
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
        this.router.use("/*", this.routerError)
    }

    private async routerError(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            next(new NotFound("Route not found"))
        } catch (err) {
            next(new BadRequest('Bad Request'))
        };
    };

    private async all(req: express.Request, res: express.Response, next: express.NextFunction) {

        try {

            const employees = await EmployeesService.all()

            if (!employees) {

                next(new NotFound(`Not Found`))

            }

            res.json(employees)

        } catch (err) {

            next(new BadRequest("Bad Request"));

        }

    }

    private async one(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id = +req.params.id
            const employee = await EmployeesService.getOne(id)
            if (!employee) {
                next(new NotFound(`ID ${id} not found`))
            }
            res.json(employee)

        } catch (err) {
            next(new BadRequest("Bad Request"));
        }
    }

    private async post(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const { firstName, lastName, title, country, city, birthDate } = req.body
            const employee: Employee = new Employee(firstName, lastName, title, country, city, birthDate)
            const errors = await validate(employee)
            if (errors.length) {
                res.status(400).json(errors)
                return
            }
            const result: Employee = await EmployeesService.postOne(req.body)
            res.status(201).json(result)
        } catch (err) {
            next(new BadRequest('Bad Request'))
        }
    }
    private async put(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            const { firstName, lastName, title, country, city, birthDate } = req.body
            const employee: Employee = new Employee(firstName, lastName, title, country, city, birthDate)
            employee.id = id
            const errors = await validate(employee)
            if (errors.length) {
                res.status(400).json(errors)
                return
            }
            const currentEmployee = await EmployeesService.updateOne(employee)
            res.status(201).json(currentEmployee)
        } catch (err) {
            next(new BadRequest('Bad Request'))
        }
    }
    private async patch(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            const { firstName, lastName, title, country, city, birthDate } = req.body
            const employee: Employee = new Employee(firstName, lastName, title, country, city, birthDate)
            employee.id = id
            const errors = await validate(employee)
            if (errors.length) {
                res.status(400).json(errors)
                return
            }
            const currentEmployee = await EmployeesService.partlyUpdate(employee)
            res.json(currentEmployee)
        } catch (err) {
            next(new BadRequest('Bad Request'))
        }
    }
    private async delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            const result = await EmployeesService.deleteOne(id)
            res.status(204).json("Deleted")
        } catch (err) {
            next(new BadRequest("Bad Request"));

        }

    }

}