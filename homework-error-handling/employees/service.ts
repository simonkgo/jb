import { Employee } from './employee';
import Repo from './repository';

class Service {
  constructor() {}

  public async getAll(): Promise<Employee[]> {
    const employees: Employee[] = await Repo.getAll();
    return employees;
  }
  public async getById(id: number): Promise<Employee> {
    const employees: Employee[] = await Repo.getAll();
    const employee = employees.find((employee) => employee.id === id)!;
    return employee;
  }
  public async addEmployee(employee: Employee): Promise<Employee[]> {
    const employees: Employee[] = await Repo.getAll();
    employee.id = employee.id ||  employees.length + 1;
    employees.push(employee);
    await Repo.saveAll(employees);
    return employees;
  }

  public async putEmployee(employee: Employee): Promise<Employee> {
    const employees: Employee[] = await Repo.getAll();
    const employeeIndex = employees.findIndex((emp) => emp.id === employee.id);

    employees[employeeIndex] = employee;
    await Repo.saveAll(employees);
    return employees[employeeIndex];
  }

  public async patch(employee: Employee): Promise<Employee> {
    const employees: Employee[] = await Repo.getAll();
    const employeeIndex:number = employees.findIndex((emp) => emp.id === employee.id);
    employee.id = employees[employeeIndex].id;
    console.log("Employee"+employee);
    console.log("Employee from array"+employees[employeeIndex]);
    

    if (employee.firstName == null) {
      employee.firstName = employees[employeeIndex].firstName;
    }

    if (employee.lastName == null) {
      employee.lastName = employees[employeeIndex].lastName;
    }

    if (employee.title == null) {
      employee.title = employees[employeeIndex].title;
    }

    if (employee.country == null) {
      employee.country = employees[employeeIndex].country;
    }

    if (employee.city == null) {
      employee.city = employees[employeeIndex].city;
    }
    if (employee.birthDate == null) {
      employee.birthDate = employees[employeeIndex].birthDate;
    }

    employees[employeeIndex] = employee;
    await Repo.saveAll(employees);
    return employees[employeeIndex];
  }

  public async deleteById(id: number): Promise<Employee[]> {
    const employees: Employee[] = await Repo.getAll();
    const employeeIndex = employees.findIndex((emp) => emp.id === id);
    employees.splice(employeeIndex, 1);
    await Repo.saveAll(employees);
    return employees;
  }

  
}

export default new Service();
