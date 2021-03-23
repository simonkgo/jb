import * as express from 'express';
import {Employee} from './employee';
import EmployeesService from "./Employees-service";
import{NotFound, BadRequest} from '../middleware/error-middleware'
import {Deleted} from '../middleware/delete-middleware'
import { validate } from 'class-validator';


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
        this.router.delete('/employees/:id', this.delete)
        
    }

    private async all (req:express.Request, res:express.Response,next:express.NextFunction){
    
        try {
            const employees = await EmployeesService.all()        
            res.json(employees)
        }
        catch(err){
            next(new BadRequest('Bad Request Costumized') )
        }
    }

    private async getOne (req: express.Request, res:express.Response,next:express.NextFunction) {
        try{
            const id:number = +req.params.id;
            const employee = await EmployeesService.getOne(id)
            if(!employee) {
                next(new NotFound(`id ${id} not found`) )
            }
            res.json(employee)
        }
        catch(err) {
            next(new BadRequest('Bad Request Costumized') )
        }
    }

    private async post(req:express.Request , res:express.Response,next:express.NextFunction){
        try{
            const {id, firstName, lastName, title, country,city, birthDate} = req.body
            const newEmployee = new Employee(id,firstName, lastName, title, country,city, birthDate)
            const errors = await validate(newEmployee)
            if(errors.length){
                next(new BadRequest('Bad Request Costumized') )
            }

            const employee: Employee = await EmployeesService.post(req.body);
            res.status(201).json(employee)
        }
        catch (err){
            next(new BadRequest('Bad Request Costumized') )

        }
    }

    private async put (req:express.Request, res:express.Response,next:express.NextFunction){
        try{
            const {id, firstName, lastName, title, country,city, birthDate} = req.body
            const newEmployee = new Employee(id,firstName, lastName, title, country,city, birthDate)
            const errors = await validate(newEmployee,{groups:['patch','put']})
            if(errors.length){
                next(new BadRequest('Bad Request Costumized') )
            }


            const idParam:number = +req.params.id
            const employee:Employee = req.body
            employee.id=idParam
            const result: Employee = await EmployeesService.put(employee)
            if(!result) {
                next(new NotFound(`id ${idParam} not found`) )
            }
            res.json(result)
        }
        catch(err){
            next(new BadRequest('Bad Request Costumized') )
        }

    }
    private async patch (req:express.Request, res:express.Response,next:express.NextFunction){
       try{
        const {id, firstName, lastName, title, country,city, birthDate} = req.body
        const newEmployee = new Employee(id,firstName, lastName, title, country,city, birthDate)
        const errors = await validate(newEmployee,{groups:['patch']})
        if(errors.length){
            next(new BadRequest('Bad Request Costumized') )
        }


            const idp:number = +req.params.id
            const employee:Employee = req.body
            employee.id=idp
            const result: Employee = await EmployeesService.patch(employee)
            if(!result) {
                
                next(new NotFound(`id ${id} not found`) )
            }
            else{

                res.json(result)
            }
        }
        catch(err){
            next(new BadRequest('Bad Request Costumized') )
        }

    }

    private async delete (req:express.Request,res:express.Response,next:express.NextFunction){
        try{
            const id:number = +req.params.id;
            const employee = await EmployeesService.getOne(id)
            if(!employee) {
                next(new NotFound(`id ${id} not found`) )
            }
            const employeesUpdated= await EmployeesService.delete(id)
            // res.json(employeesUpdated)
            next(new Deleted(`id ${id} is deleted`))
        
        }
        catch(err) {
            next(new BadRequest('Bad Request Costumized') )
        }
    }


}