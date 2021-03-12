import IEmployee from "./employee";
import EmployeeRepository from "./employee-repository";

export default class EmployeeService {
  private static employeeRepository: EmployeeRepository = new EmployeeRepository();

  static async getAll(): Promise<Array<IEmployee>> {
    return await this.employeeRepository.getAllEmployee();
  }

  static async getEmployee(id: number) {
    try {
      const employeesData: Array<IEmployee> = await this.employeeRepository.getAllEmployee();
      if (employeesData.length < id) return { error: "employee not found" };
      const employee = employeesData.find(
        (employee: IEmployee) => employee.id === id
      );
      return employee;
    } catch {}
  }

  static async addEmployee(employee: IEmployee) {
    try {
      const employeesData: Array<IEmployee> = await this.employeeRepository.getAllEmployee();
      employee.id = employeesData.length + 1;
      employeesData.push(employee);
      this.employeeRepository.saveAll(employeesData);
      return employeesData;
    } catch {}
  }

  static async updateEmployee(employee: IEmployee) {
    try {
      const employeesData: Array<IEmployee> = await this.employeeRepository.getAllEmployee();
      if (employeesData.length < employee.id)
        return { error: "employee not found" };
      const employeeFromDbIndex = employeesData.findIndex(
        (employeeDb: IEmployee) => employeeDb.id === employee.id
      );
      employeesData.splice(employeeFromDbIndex, 1, employee);
      this.employeeRepository.saveAll(employeesData);
      return employeesData;
    } catch {}
  }

  static async updateEmployeeSomeProp(employee: IEmployee) {
    try {
      const employeesData: Array<IEmployee> = await this.employeeRepository.getAllEmployee();
      if (employeesData.length < employee.id)
        return { error: "employee not found" };
      let employeeFromDbIndex = employeesData.findIndex(
        (employeeDb: IEmployee) => employeeDb.id === employee.id
      );
      
      employeesData[employeeFromDbIndex] = {...employeesData[employeeFromDbIndex],...employee}
    
      this.employeeRepository.saveAll(employeesData);
      
      return employeesData;
    } catch {}
  }

  static async deleteEmployee(id: number) {
    try {
      const employeesData: Array<IEmployee> = await this.employeeRepository.getAllEmployee();
      if (employeesData.length < id) return { error: "employee not found" };
      let employeeFromDbIndex = employeesData.findIndex(
        (employeeDb: IEmployee) => employeeDb.id === id
      );
      employeesData.splice(employeeFromDbIndex, 1);
      this.employeeRepository.saveAll(employeesData);
      return employeesData;
    } catch {}
  }
}
