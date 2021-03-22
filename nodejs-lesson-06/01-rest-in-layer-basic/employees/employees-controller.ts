import * as express from 'express';
import  EmployessService  from './employeesServics';
import { Employee } from './employee'
import { validate , ValidatorOptions} from 'class-validator';
import { erorMiddelware, NotFound } from '../middelware/eror-middleware'


export class EmployeeController{

    public router:express.Router;

    constructor(){
        this.router = express.Router();
        this.activateRouter();
    };

    activateRouter(){
        this.router.get('/employee',this.all);
        this.router.get('/employee/:id',this.oneId);
        this.router.post('/employee',this.post);
        this.router.put('/employee/:id',this.put);
        this.router.patch('/employee/:id',this.patch);
        this.router.delete('/employee/:id',this.delete)
    };

    async all(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const allEmployees:Employee[] = await EmployessService.getAllEmployee();
                res.json(allEmployees);
        } catch (err) {
            next(new NotFound(err.massage))

        }
        
    };

   private async oneId(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const getOne:Employee = await EmployessService.getOneEmployee(parseInt(req.params.id));
            if(!getOne){
                next(new NotFound(`No Employee With This Id`))
                return
            }
            res.json(getOne)
        } catch (err) {
            next(new NotFound(err.massage));
        };
    };

   private async post(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const {firstName,lastName,title,city,country,birthDate} = req.body;
            const employee:Employee = new Employee(firstName,lastName,title,city,country,birthDate)
            const errors = await validate(employee);
            if(errors.length){
            res.status(400).json(errors)
                return
            }
           
            const resulte:Employee = await EmployessService.addNewEmployee(employee);
             res.status(201).json(resulte)

        } catch (err) {
            next(new NotFound(err.massage));

        }

    };
    private async put(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const {firstName,lastName,title,city,country,birthDate} = req.body;
            const employee:Employee = new Employee(firstName,lastName,title,city,country,birthDate)
            const errors = await validate(employee);
            if(errors.length){
            res.status(400).json(errors)
                return
            }

          const idOfEmployee = parseInt(req.params.id);
         
          employee.id = idOfEmployee;
          const update = await EmployessService.putEmployee(employee);
          res.json(update)
        } catch (err) {
            next(new NotFound(err.massage));

        }
    };
    private async patch(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const {firstName,lastName,title,city,country,birthDate} = req.body;
            const employee:Employee = new Employee(firstName,lastName,title,city,country,birthDate)
            const errors = await validate(employee);
            if(errors.length){
            res.status(404).json(errors)
                return
            }

            const idOfEmployee = parseInt(req.params.id);
           
            employee.id = idOfEmployee;
            const update = await EmployessService.patchData(employee);
            res.json(update)
        } catch (err) {
            next(new NotFound(err.massage));

        };
    };

    private async delete(req:express.Request,res:express.Response,next:express.NextFunction){
        try {
            const deleteEmployee = await EmployessService.deleteData(+req.params.id);
            res.json(deleteEmployee);
        } catch (err) {
            next(new NotFound(err.massage));

            
        };
    };
};

