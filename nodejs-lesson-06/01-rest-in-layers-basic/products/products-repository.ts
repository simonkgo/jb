import * as fs from "fs";
import * as util from "util";
import { Product } from './product';

class ProductsRepository {
    private readFile: any;
    private writeFile: any;

    constructor() {
        this.readFile = util.promisify(fs.readFile);
        this.writeFile = util.promisify(fs.writeFile);
    };

    //פונקציה שתקרא את התוכן מתוך הקובץ;
    //---;
    public async getAll(): Promise<Product[]> {
        try {
            const result = await this.readFile("./database/products.json", "utf-8");
            return JSON.parse(result);
        } catch (err) {
            throw err;
        };
    };
    
    //פונקציה שתכתוב את התוכן לתוך הקובץ;
    //---;
    public async saveAll(products: Product[]): Promise<Product[]> {
        try {
            return await this.writeFile("./database/products.json", JSON.stringify(products));
        } catch (err) {
            throw err;
        };
    };
};

export default new ProductsRepository();