import * as express from 'express';
import {Employee} from './employee';
import EmployeesService from "./Employees-service";


export class EmployeesController {

    public router : express.Router;
    constructor (){
        this.router = express.Router()
        this.activeEmployeesControllerRoutes()
        
    }

    private activeEmployeesControllerRoutes(){
        this.router.get('/employees', this.all)
        this.router.get('/employees/:id', this.getOne)
        this.router.post('/employees', this.post)
        this.router.put('/employees/:id', this.put)
        this.router.patch('/employees/:id', this.patch)
        
    }

    private async all (req:express.Request, res:express.Response){
    
        try {
            const employees = await EmployeesService.all()        
            res.json(employees)
        }
        catch(err){
            res.status(400).send(err.message)
        }
    }

    private async getOne (req: express.Request, res:express.Response) {
        try{
            const id:number = +req.params.id;
            const employee = await EmployeesService.getOne(id)
            if(!employee) {
                res.status(404).send(`id ${id} not found`)
            }
            res.json(employee)
        }
        catch(err) {
            res.status(400).send(err.message)
        }
    }

    private async post(req:express.Request , res:express.Response){
        try{
            const employee: Employee = await EmployeesService.post(req.body);
            res.status(201).json(employee)
        }
        catch (err){
            res.status(400).send(err.message)

        }
    }

    private async put (req:express.Request, res:express.Response){
        try{
            const idParam:number = +req.params.id
            const employee:Employee = req.body
            employee.id=idParam

            const result: Employee = await EmployeesService.put(employee)
            res.json(result)
        }
        catch(err){
            res.status(400).send(err.message)
        }

    }
    private async patch (req:express.Request, res:express.Response){
        try{
            const idParam:number = +req.params.id
            const employee:Employee = req.body
            employee.id=idParam

            const result: Employee = await EmployeesService.patch(employee)
            res.json(result)
        }
        catch(err){
            res.status(400).send(err.message)
        }

    }

}