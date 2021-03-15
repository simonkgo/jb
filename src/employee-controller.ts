import EmployeeService from "./employee-service";
import express, { NextFunction } from "express";
import IEmployee from "./employee";

export default class EmployeeController {
  
  public static async getAll(req: express.Request, res: express.Response) {
    try {
      const data = await EmployeeService.getAll();
      res.json(data);
    } catch {}
  }

  public static async getOneEmployee(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const employee: any = await EmployeeService.getEmployee(+req.params.id);
      res.json(employee);
    } catch {}
  }

  public static async addEmployee(req: express.Request, res: express.Response) {
    
    try {
      const result = await EmployeeService.addEmployee(req.body);
      res.json(result);
    } catch {}
  }

  public static async updateEmployee(
    req: express.Request,
    res: express.Response
  ) {
    const employee: IEmployee = { ...req.body, id: +req.params.id };
    try {
      const result = await EmployeeService.updateEmployee(employee);
      res.json(result);
    } catch {}
  }

  public static async updateSomeEmployeeProp(
    req: express.Request,
    res: express.Response
  ) {
    const employee: IEmployee = { ...req.body, id: +req.params.id };

    try {
      const result = await EmployeeService.updateEmployeeSomeProp(employee);
      res.json(result);
    } catch {}
  }

  public static async deleteEmployee(
    req: express.Request,
    res: express.Response
  ) {
    try{
      const result = await EmployeeService.deleteEmployee(+req.params.id);
      res.json(result)
    } catch{

    }   
  }
}
