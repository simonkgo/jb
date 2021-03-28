import express from 'express';
import fileUpload from "express-fileupload"
import { Controller } from './employees/controller';
import { httpErrorMiddleware } from './middleware/error-handling';
import { printRequestInfo } from './middleware/additional-middleware';

export default class Server {
  public app: express.Application;
  constructor() {
    this.activate();
    this.routes();
  }

  activate() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(printRequestInfo);
    this.app.use(fileUpload());
    this.app.use(httpErrorMiddleware);

    this.app.listen(3000, () => {
      console.log('Listen on port 3000');
    });
  }
  routes() {
    this.app.use('/employees', new Controller().router);
  }
}

new Server();
