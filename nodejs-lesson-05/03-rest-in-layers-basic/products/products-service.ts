import { Product } from "./product";
import ProductsRepository from "./products-repository";

class ProductsService {
    constructor() {}
    public async all(): Promise<Product[]> {
        const products:Product[] = await ProductsRepository.getAll();
        return products;
    }
    public async one(id): Promise<Product> {
        const products:Product[] = await ProductsRepository.getAll();
        const product:Product = products.find((product) => product.id === id)!;

        return product;
    }

    public async post(newProduct:Product):Promise<Product> {
        let newId = 1;
        const products:Product[] = await ProductsRepository.getAll();
        const verifyId = () => {
            const product = products.find(product => product.id === newId)
            if(!product){
                return;
            }
            newId++;
            verifyId();
        }
        verifyId();
        newProduct.id = newId;
        products.push(newProduct);
        await ProductsRepository.saveAll(products);
        return newProduct;
    }
}

export default new ProductsService();
