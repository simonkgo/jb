import { json } from 'express';
import * as fs from 'fs';
import * as util from 'util';
import { Employee } from './employee'


 class EmployeesRepository{
    public readFile:any;
    public writeFile:any;

    constructor(){
        this.readFile = util.promisify(fs.readFile);
        this.writeFile = util.promisify(fs.writeFile);
    }

   public async getAll():Promise<Employee[]>{
        try {
            const allEmployees = await this.readFile('./database/employee.json','utf-8');
            return JSON.parse(allEmployees);
        } catch (err) {
            throw err;
        }
       
   }

  public async save(employees:Employee[]):Promise<Employee[]>{
       try {
       return await this.writeFile('./database/employee.json',JSON.stringify(employees));
        } catch (err) {
           throw err
       }
       
   }
}

export default new EmployeesRepository();