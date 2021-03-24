import Employee from "./employee";
import EmployeesRepository from "./employees-repository"
import Log from "./log";

class EmployeesService {

    public async getAll(): Promise<Employee[]> {
        const employees: Employee[] = await EmployeesRepository.getAll()
        return employees

    }

    public async delEmployee(id: number): Promise<number> {
        const result: Employee[] = await EmployeesRepository.getAll()
        const indexOfEmployeeToDelete = result.findIndex(emp => emp.id === id)!
        result.splice(indexOfEmployeeToDelete, 1)
        await EmployeesRepository.saveAll(result)
        return indexOfEmployeeToDelete
    }

    public async saveToLog(log: Log): Promise<Log> {
        const result: Log[] = await EmployeesRepository.getLog()
        result.push(log)
        await EmployeesRepository.saveToLog(result)
        return log
    }
}

export default new EmployeesService()