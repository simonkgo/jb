import * as fs from "fs";
import * as util from "util";
import { Employee } from "./employee-model";

class EmployeesRepository {
    private _readfile: any;
    private _writefile: any;
    constructor() {
        this._readfile = util.promisify(fs.readFile);
        this._writefile = util.promisify(fs.writeFile);
    }
    public async getAll(): Promise<Employee[]> {
        try {
            const result:Employee[] = JSON.parse(await this._readfile("./database/Employees.json", "utf-8"));
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async saveAll(employees:Employee[]):Promise<Employee[]> {
        try{
            return await this._writefile("./database/Employees.json", JSON.stringify(employees))
        }catch(err){
            throw err;
        }
    }
}

export default new EmployeesRepository();