import * as fs from 'fs'
import * as util from 'util'
import { Employee } from './employee';

class EmployeesRepository {
    readFile: any
    writeFile: any

    constructor() {
        this.readFile = util.promisify(fs.readFile)
        this.writeFile = util.promisify(fs.writeFile)

    }
    public async getAll(): Promise<Employee[]> {

        try {
            const result = await this.readFile("./database/employees.json", "utf-8")
            return JSON.parse(result)

        } catch (err) {
            throw err
        }
    }
    public async saveAll(employees: Employee[]): Promise<Employee[]> {
        try {
            return await this.writeFile("./database/employees.json", JSON.stringify(employees))
        } catch (err) {
            throw err
        }
    }
}

export default new EmployeesRepository()