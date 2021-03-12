import fs from "fs";
import util from "util";
import IEmployee from "./employee";


export default class EmployeeRepository {
  private writeFile;
  private readFile;

  constructor() {
    this.writeFile = util.promisify(fs.writeFile);
    this.readFile = util.promisify(fs.readFile);
  }

  public async getAllEmployee() {
    try {
      const result = await this.readFile("./src/database/employees.json");
      return JSON.parse(result);
    } catch (e) {
      console.log(e.message);
    }
  }

  public async saveAll(employeeArray: Array<IEmployee>) {
    const data = JSON.stringify(employeeArray);
    try {
      await this.writeFile("./src/database/employees.json", data);
    } catch {}

  }
}
