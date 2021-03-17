import { Employee } from './employee';
import EmployeesRepository from './employees-repository'

class EmployeesService {
    public async all(): Promise<Employee[]> {
        const result: Employee[] = await EmployeesRepository.getAll()
        return result

    }
    public async getOne(id: number): Promise<Employee> {
        const result: Employee[] = await EmployeesRepository.getAll()
        const employee: Employee = result.find(emp => emp.id === id)!
        return employee
    }
    public async postOne(employee: Employee): Promise<Employee> {
        const employees: Employee[] = await EmployeesRepository.getAll()
        employee.id = employees[employees.length - 1].id + 1
        employees.push(employee)
        await EmployeesRepository.saveAll(employees)
        return employee
    }
    public async updateOne(employee: Employee) {
        const employees: Employee[] = await EmployeesRepository.getAll()
        let index: number = employees.findIndex(emp => emp.id === employee.id)!
        employees[index] = employee
        await EmployeesRepository.saveAll(employees)
        return employee
    }
    public async partlyUpdate(employee: Employee) {
        const employees: Employee[] = await EmployeesRepository.getAll()
        const currentEmployee: Employee = employees.find(emp => emp.id === employee.id)!
        for (let key in currentEmployee) {
            if (key in employee && employee[key] !== undefined) {
                currentEmployee[key] = employee[key]
            }
        }
        await EmployeesRepository.saveAll(employees)
        return employee

    }
    public async deleteOne(id: number) {
        const employees: Employee[] = await EmployeesRepository.getAll()
        let index: number = employees.findIndex(emp => emp.id === id)!
        employees.splice(index, 1)
        await EmployeesRepository.saveAll(employees)
        return employees
    }
}

export default new EmployeesService()