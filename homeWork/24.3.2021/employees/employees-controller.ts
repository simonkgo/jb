import * as express from 'express'
import Employee from './employee'
import EmployeesService from './employees-service'



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

    private async delEmployee(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: number = +req.params.id
            await EmployeesService.delEmployee(id)
            res.status(204).json("Deleted")
            next(id)
            next()
        } catch (err) {
            throw err
        }
    }
    private DelMiddleware(err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(`User is going to delete employee ${err}`)
    }

    private async logMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.method)
        console.log(req.route.path)
        const log = {
            method: req.method,
            path: req.route.path,
        }
        await EmployeesService.saveToLog(log)
    }
}

