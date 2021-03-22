import * as fs from 'fs';

import * as util from 'util';
import { Product } from './product';

class ProductRepository{
    readFile:any;
    writeFile:any;

    constructor(){
        this.readFile = util.promisify(fs.readFile);
        this.writeFile = util.promisify(fs.writeFile);
    };
    public async getAll():Promise<Product[]>{
        try {
            const resulte = await this.readFile('./database/products.json','utf-8');
            return JSON.parse(resulte)
        } catch (err) {
            throw err
        }
    };
   
    public async saveAll(product:Product[]):Promise<Product[]>{
        try {
           return await this.writeFile('./database/products.json',JSON.stringify(product));
         } catch (err) {
            throw err 
       }
    }
}
export default new ProductRepository();