import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

export const printRequestInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = path.join(__dirname, '../../requests-logs/logs.txt');
  const requestDetails = {
    date: new Date(),
    method: req.method,
    path: req.path,
  };
  await fs.appendFile(url, JSON.stringify(requestDetails));
  next();
};

// class RequestInfo {
//   public time: string;
//   public method: string;
//   public route: string;
//   constructor(time: string, method: string, route: string) {
//     this.time = time;
//     this.method = method;
//     this.route = route;
//   }
// }

// export class RequestInformation extends RequestInfo {
//   constructor(time: string, method: string, route: string) {
//     super(time, method, route);
//   }
// }

// export const printRequestInfo = (
//   object: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (object instanceof RequestInfo) {
//     const time = object.time || 'Error';
//     const method = object.method || 'Error';
//     const route = object.route || 'Error';
//     console.log('inside of printrequestinfo');

//     console.log('Time: ' + time, 'Method: ' + method, 'Route: ' + route);
//     res.json(`Time:  + ${time}, Method:  + ${method}, Route:  + ${route}`);
//   } else {
//     next(object);
//   }
// };

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export class Delete {
  public message: string = '';
  constructor(message: string) {
    this.message = message;
  }
}

export const deleteMessage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('User is going to delete employee' + req.params.id);
  res.json('User is going to delete employee' + req.params.id);
  next();
};
