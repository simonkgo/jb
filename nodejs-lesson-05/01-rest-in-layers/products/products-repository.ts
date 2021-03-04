import * as fs from "fs";
import * as util from "util";
import { Product } from "./product";

//!1;
class ProductsRepository {
    readFile: any;
    writeFile: any;

    //!1;
    constructor() {
        //!1;
        this.readFile = util.promisify(fs.readFile);
        this.writeFile = util.promisify(fs.writeFile);
    };

    /*
        1 public async getAll(): Promise<Product[]> {}
        2 try catch
        3 return response "moishe say hi from the repository";
    */
    //!1;
    public async getAll(): Promise<Product[]> {
        try {
            const result = await this.readFile("./database/products.json", "utf-8");
            return JSON.parse(result);
        } catch (err) {
            throw err;
        };
    };

    //!3;
    public async saveAll(products: Product[]): Promise<Product[]> {
        return await this.writeFile("./database/products.json", JSON.stringify(products));
    };
};

export default new ProductsRepository();