//data-access-layer
import * as fs from "fs";
import * as util from "util";
import { Product } from "./product";


class ProductsRepository {
    private _readfile: any;
    private _writefile: any;
    constructor() {
        this._readfile = util.promisify(fs.readFile);
        this._writefile = util.promisify(fs.writeFile);
    }
    public async getAll(): Promise<Product[]> {
        try {
            const result:Product[] = JSON.parse(await this._readfile("./database/products.json", "utf-8"));
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async saveAll(products:Product[]):Promise<Product[]> {
        try{
            return await this._writefile("./database/products.json", JSON.stringify(products))
        }catch(err){
            throw err;
        }
    }
}

export default new ProductsRepository();
