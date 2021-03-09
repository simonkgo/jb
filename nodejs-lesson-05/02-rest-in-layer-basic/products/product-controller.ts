import * as express from 'express';

import { readFile } from 'fs';

import * as util from 'util';


export class ProductControler {
    private _router:any;
    public readFile:any;

    constructor(){
        this._router = express.Router();
        this.activateRoute();
        this.readFile = util.promisify(readFile);
         
    }
    
    activateRoute(){
        this._router.get('/products',this.all);
        this._router.get('/products/id',this.onId);
    };

    private async all(req,res,next){
        try {
           const resulte = await this.readFile('./../database/products.json')
           res.json(resulte)
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