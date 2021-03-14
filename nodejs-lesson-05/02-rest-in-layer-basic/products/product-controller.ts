import * as express from 'express';

export class ProductControler {
    private _router:any;

    constructor(){
        this._router = express.Router();
        this.activateRoute();
    }
    
    activateRoute(){
        this._router.get('/products',this.all);
        this._router.get('/products/id',this.onId);
    };

    private async all(req,res,next){
        try {
           
           res.json('OK');
        } catch (err) {
            res.status(500).send(err.message);
        };
    };

    private async onId (req,res,next) {
        try {
            res.json('id product')
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    get router (){
        return this._router
    };
};