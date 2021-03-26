import fs from "fs";
import util from "util";
import IEmployee from "./employee";

export default class EmployeeRepository {
  public static async getAllEmployee() {
    
    const readFile = util.promisify(fs.readFile);
   try {
      const result = await readFile("./src/database/employees.json", "utf-8");

      return JSON.parse(result);

    } catch (e) {
      // console.log(e.message);
    }
  }

  public static async saveAll(employeeArray: Array<IEmployee>) {
    const writeFile = util.promisify(fs.writeFile);
    const data = JSON.stringify(employeeArray);
    try {
      await writeFile("./src/database/employees.json", data);
    } catch {}
  }
}
