import  EmployeesRepository  from './employessRepository';

import { Employee } from './employee'

class EmployessService{

    async getAllEmployee():Promise<Employee[]>{
        try {
        const employess:Employee[] = await EmployeesRepository.getAll();
            return employess;
        } catch (err) {
            throw err
        }
    };

   public async getOneEmployee(id:number):Promise<Employee>{
        try {
        const employess:Employee[] = await EmployeesRepository.getAll();
        const employee:Employee = employess.find(e => e.id === id)!;
            return employee
        } catch (err) {
            throw err
        }
    };

   public async addNewEmployee(employee:Employee):Promise<Employee>{
       try {
        const employess:Employee[] = await EmployeesRepository.getAll();
        employee.id = employess.length + 1;
        employess.push(employee);
        await EmployeesRepository.save(employess);
            return employee;
        } catch (err) {
        throw err
        }
    };

    public async putEmployee (updEmployee:Employee):Promise<Employee>{
        try {
        const employess:Employee[] = await EmployeesRepository.getAll();
            const index:number = employess.findIndex(e => e.id === updEmployee.id);
            employess[index] = updEmployee;
            await EmployeesRepository.save(employess);
            return updEmployee;
            
        } catch (err) {
            throw err
        }
    };

    public async patchData(update:Employee):Promise<Employee>{
        try {
        const employess:Employee[] = await EmployeesRepository.getAll();
        const index:Employee = employess.find(e => e.id === update.id)!;

        for(const key in index){
            if(key in update){
                index[key] = update[key];
            }
        }
        await EmployeesRepository.save(employess);
        return update;
        } catch (err) {
            throw err;
        }
    };

    public async deleteData(id:number){
        try {
        const employess:Employee[] = await EmployeesRepository.getAll();
        const deleteEmployee:number = employess.findIndex(e => e.id === id)!;
        employess.splice(deleteEmployee,1);
        await EmployeesRepository.save(employess);
         return `The Employee Is Delete`
        } catch (err) {
            throw err
        }
    }
}
export default new EmployessService()