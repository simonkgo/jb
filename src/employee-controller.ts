import EmployeeService from "./employee-service";
import express, { NextFunction } from "express";
import Employee from "./employee";

import { validate } from "class-validator";
import { BadRequest } from "./error-middelware/error-middelware";

export default class EmployeeController {
  public static async getAll(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const data = await EmployeeService.getAll();
      res.json(data);
    } catch {
      next(new BadRequest("server not found"));
    }
  }

  public static async getOneEmployee(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const employee: any = await EmployeeService.getEmployee(+req.params.id);
      res.json(employee);
    } catch {
      next(new BadRequest("server not found"));
    }
  }

  public static async addEmployee(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    const {
      id,
      firstName,
      lastName,
      birthDate,
      title,
      country,
      city,
    } = req.body;
    try {
      const employee: Employee = new Employee(
        firstName,
        lastName,
        title,
        country,
        city,
        birthDate,
        id
      );
      const errors = await validate(employee);
      if (errors.length) {
        res.status(400).json(errors);
        return;
      }
      const result = await EmployeeService.addEmployee(req.body);
      res.json(result);
    } catch {
      next(new BadRequest("server not found"));
    }
  }

  public static async updateEmployee(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const { firstName, lastName, birthDate, title, country, city } = req.body;
      const employee: Employee = new Employee(
        firstName,
        lastName,
        title,
        country,
        city,
        birthDate,
        +req.params.id
      );
      const errors = await validate(employee);
      if (errors.length) {
        res.status(400).json(errors);
        return;
      }
      const result = await EmployeeService.updateEmployee(employee);
      res.json(result);
    } catch {
      next(new BadRequest("server not found"));
    }
  }

  public static async updateSomeEmployeeProp(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const employeePartProp = { ...req.body, id: +req.params.id };
      const result = await EmployeeService.updateEmployeeSomeProp(
        employeePartProp
      );
      res.json(result);
    } catch {
      next(new BadRequest("server not found"));
    }
  }

  public static async deleteEmployee(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const result = await EmployeeService.deleteEmployee(+req.params.id);
      res.json(result);
    } catch {
      next(new BadRequest("server not found"));
    }
  }
}
