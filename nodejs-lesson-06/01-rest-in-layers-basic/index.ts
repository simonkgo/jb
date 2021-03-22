import * as express from "express";
import {ProductsController} from "./product/products-controller";
import {HttpErrorMiddleware, ProgrammingErrorMiddleware, Forbidden, BadReq} from "./middleware/error-middleware";

export default class Server{
    public app: express.Application;
    private ProductsController:ProductsController;

    constructor(){
        this.activate();
    }

    activate(){
        this.app = express();
        this.app.use(express.json());
        this.app.use("/api/v1", new ProductsController().router);
        this.app.use(HttpErrorMiddleware);
        this.app.use(ProgrammingErrorMiddleware);
        // this.app.use(Forbidden);
        // this.app.use(BadReq);
        // this.app.use(Forbidden);
        this.app.listen(3005, () =>{console.log("listening on port 3005 just checking")});
    };

}

new Server();