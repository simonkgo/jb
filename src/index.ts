import express, { Request, Response } from "express";
import EmployeeRouter from "./employee-router";
import { httpMiddelwareError } from "./error-middelware/error-middelware";
class Server {
  private static app: express.Application;

  public static createServer() {
    if (!this.app) {
      this.buildServer();
    } else {
      return this.app;
    }
  }

  private static buildServer() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(EmployeeRouter.employeeRouting(), httpMiddelwareError);
    this.app.use((req: Request, res: Response) =>
      res.status(404).json({ errors: "page not found" })
    );
    this.app.listen(4000, () => console.log("server work at port 4000"));
  }
}

Server.createServer();
