import express from "express";
import EmployeeController from "./employee-controller";
import deleteEmployee from "./middelware/employee-delete"
export default class EmployeeRouter {
  private static router: express.Router = express.Router();

  public static employeeRouting() {
    this.router.get("/employees", EmployeeController.getAll);
    this.router.get("/employees/:id",EmployeeController.getOneEmployee);
    this.router.post("/employees",EmployeeController.addEmployee);
    this.router.put("/employees/:id",EmployeeController.updateEmployee);
    this.router.patch("/employees/:id",EmployeeController.updateSomeEmployeeProp);
    this.router.delete("/employees/:id",deleteEmployee,EmployeeController.deleteEmployee);
    return this.router;
  }
}
