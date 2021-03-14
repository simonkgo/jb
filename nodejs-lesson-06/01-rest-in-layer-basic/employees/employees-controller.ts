import * as express from 'express';
import  EmployessService  from './employeesServics';
import { Employee } from './employee'

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

    async all(req:express.Request,res:express.Response){
        try {
            const allEmployees:Employee[] = await EmployessService.getAllEmployee();
                res.json(allEmployees);
        } catch (err) {
            res.status(404).send(err.massage);
        }
        
    };

   private async oneId(req:express.Request,res:express.Response){
        try {
            const getOne:Employee = await EmployessService.getOneEmployee(parseInt(req.params.id));
            if(!getOne){
                res.json({massage:`No Employee With This Id`});
                return
            }
            res.json(getOne)
        } catch (err) {
            res.status(404).send(err.massage)
        }
    };

   private async post(req:express.Request,res:express.Response){
        try {
            const employee:Employee = await EmployessService.addNewEmployee(req.body);
            res.status(201).json(employee)
        } catch (err) {
            res.status(404).send(err.massage)
        }
    };
    private async put(req:express.Request,res:express.Response){
        try {
          const idOfEmployee = parseInt(req.params.id);
          const bodyOfUpdateEmployee = req.body;
          bodyOfUpdateEmployee.id = idOfEmployee;
          const update = await EmployessService.putEmployee(bodyOfUpdateEmployee);
          res.json(update)
        } catch (err) {
            res.status(404).send(err.massage)
        }
    };
    private async patch(req:express.Request,res:express.Response){
        try {
            const idOfEmployee = parseInt(req.params.id);
            const bodyOfUpdateEmployee = req.body;
            bodyOfUpdateEmployee.id = idOfEmployee;
            const update = await EmployessService.patchData(bodyOfUpdateEmployee);
            res.json(update)
        } catch (err) {
            res.status(404).send(err.massage)
        }
    };

    private async delete(req:express.Request,res:express.Response){
        try {
            const deleteEmployee = await EmployessService.deleteData(+req.params.id);
            res.json(deleteEmployee)
        } catch (err) {
            res.status(404).send(err.massage)
            
        }
    }
}

