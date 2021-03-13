import { Employee } from './employee';
import employeesRepository from './employees-repository';
import EmployeesRepository from './employees-repository';

class EmployeesService {
    constructor(){}

    public async all() : Promise<Employee[]> {
        const employees:Employee[] = await EmployeesRepository.getAll()
        return employees
    }

    public async getOne (id: number):Promise<Employee>{
        const employees:Employee[] = await EmployeesRepository.getAll()
        const employee: Employee = employees.find(E => E.id === id)!
        return employee
    }

    public async post (employee:Employee):Promise<Employee>{
        const employees: Employee[] = await EmployeesRepository.getAll()
        employee.id = employees[employees.length - 1].id +1
        employees.push(employee)
        await EmployeesRepository.saveAll(employees)
        return employee

    }
    
    public async put (employee:Employee): Promise<Employee> {
        const employees:Employee[] = await employeesRepository.getAll()
        const index:number = employees.findIndex(e => e.id === employee.id)
        employees[index] = employee
        await EmployeesRepository.saveAll(employees)
        return employee
    }

    public async patch (employee:Employee): Promise<Employee> {
        const employees:Employee[] = await employeesRepository.getAll()
        const employeeToFetch: Employee = employees.find(e=> e.id === employee.id)!
        for (const key in employee){
            if(key in employeeToFetch) {
                employeeToFetch[key] = employee[key]
            }
        }
        await employeesRepository.saveAll(employees)
        return employee

    }

}

export default new EmployeesService()