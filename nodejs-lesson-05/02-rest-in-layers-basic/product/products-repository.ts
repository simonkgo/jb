import * as fs from "fs";
import * as util from "util";
// import {Product} from "./product";
// import {ProductsService} from "./products-service";

class ProductsRepository{
    readFile: any;
    writeFile:any;

    constructor(){
        this.readFile = util.promisify(fs.readFile);
    }

    public async getAll(){
        try{
            const result = await this.readFile("./database/products.json", "utf-8");
            return JSON.parse(result);
        }catch(err){
            throw err;
        }
    }
}
export default new ProductsRepository();