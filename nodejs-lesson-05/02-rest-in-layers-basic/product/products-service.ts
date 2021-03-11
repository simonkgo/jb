import {Product} from "./product";
import ProductsRepository from "./products-repository";

class ProductsService{
    constructor(){

    }

    public async all(){
        const products = await ProductsRepository.getAll();
        return products;
    }
}
export default new ProductsService();