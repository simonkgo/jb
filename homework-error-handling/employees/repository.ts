import * as fs from 'fs';
import * as util from 'util';
import { Employee } from './employee';

class Repo {
  readFile: any;
  writeFile: any;
  constructor() {
    this.readFile = util.promisify(fs.readFile);
    this.writeFile = util.promisify(fs.writeFile);
  }

  public async getAll(): Promise<Employee[]> {
    try {
      const employees: string = await this.readFile(
        './database/employees.json',
        'utf-8'
      );
      
      return JSON.parse(employees);
    } catch (error) {
      throw error;
    }
  }

  public async saveAll(employees: Employee[]): Promise<Employee[]> {
    try {
      const savedEmployees = await this.writeFile(
        './database/employees.json',
        JSON.stringify(employees)
      );
      return savedEmployees;
    } catch (error) {
      throw error;
    }
  }
}

//Very important
export default new Repo();
