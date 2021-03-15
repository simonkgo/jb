import { Employee } from "./employee-model";
import EmployeesRepository from "./employees-repository"

class EmployeesServise {
    constructor(){}
    public async all(): Promise<Employee[]> {
        const employees: Employee[] = await EmployeesRepository.getAll();
        return employees;
    }
}

export default new EmployeesServise();