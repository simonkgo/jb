import * as express from 'express';
import Service from './service';
import { Request, Response, NextFunction } from 'express';
import { Employee } from './employee';
import { validate } from 'class-validator';
import { NotFound, BadRequest } from '../middleware/error-handling';

export class Controller {
  private _router: express.Router;

  constructor() {
    this._router = express.Router();
    this.activateRouters();
  }

  private activateRouters() {
    this._router.get('/', this.getAll);
    this._router.get('/:id', this.getById);
    this._router.post('/', this.addEmployee);
    this._router.put('/:id', this.putEmployee);
    this._router.patch('/:id', this.patch);
    this._router.delete('/:id', this.deleteById);
  }

  get router(): express.Router {
    return this._router;
  }

  private async getAll(req: Request, res: Response) {
    try {
      const employees: Employee[] = await Service.getAll();
      res.json(employees);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  private async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const employee: Employee = await Service.getById(+id);
      if (!employee) {
        next(new NotFound(`id ${id} not found`));
      }
      res.json(employee);
    } catch (error) {
      next(new BadRequest('server not found'));
    }
  }

  private async addEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const tempId: number = 1;
      const { firstName, lastName, title, city, country, birthDate } = req.body;
      const employee: Employee = new Employee(
        tempId,
        firstName,
        lastName,
        title,
        city,
        country,
        birthDate
      );

      const errors = await validate(employee);
      if (errors.length) {
        res.status(400).json(errors);
        return;
      }

      const employees: Employee[] = await Service.addEmployee(employee);
      res.json(employees);
    } catch (error) {
      next(new BadRequest('server not found'));
    }
  }

  private async putEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = +req.params.id;

      const { firstName, lastName, title, city, country, birthDate } = req.body;
      const employee: Employee = new Employee(
        id,
        firstName,
        lastName,
        title,
        city,
        country,
        birthDate
      );

      employee.id = id;
      const errors = await validate(employee);
      if (errors.length) {
        res.status(400).json(errors);
        return;
      }

      const changedEmp: Employee = await Service.putEmployee(employee);

      if (!changedEmp) {
        next(new NotFound(`id ${id} not found`));
      }

      res.json(changedEmp);
    } catch (error) {
      next(new BadRequest('server not found'));
    }
  }

  private async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = +req.params.id;

      const { firstName, lastName, title, city, country, birthDate } = req.body;
      const employee: Employee = new Employee(
        id,
        firstName,
        lastName,
        title,
        city,
        country,
        birthDate
      );

      employee.id = id;
      const errors = await validate(employee, { groups: ['patch'] });
      if (errors.length) {
        res.status(400).json(errors);
        return;
      }

      const patchedEmployee: Employee = { id: id, ...req.body };

      const changedEmployee: Employee = await Service.patch(patchedEmployee);
      if (!changedEmployee) {
        next(new NotFound(`id ${id} not found`));
      }
      res.json(changedEmployee);
    } catch (error) {
      next(new BadRequest('server not found'));
    }
  }

  private async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = +req.params.id;
      const employees: Employee[] = await Service.deleteById(id);
      res.json(employees);
    } catch (error) {
      next(new BadRequest('server not found'));
    }
  }
}
