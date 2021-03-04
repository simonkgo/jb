import ProductsRepository from './products-repository';
import { Product } from "./product";

//!1;
class ProductsService {
    //!1;
    constructor() {};
     /*
        1 public async all(): Promise<Product[]> {}
        2 return response "moishe say hi from the service";
        3 ProductsRepository.getAll();
    */
    //!1;
    public async all(): Promise<Product[]> {
        const products: Product[] = await ProductsRepository.getAll();
        return products;
    };

    //!2 exersice;
    public async get(id: number): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll();
        const product: any = products.find(p => p.id === id) || "";
        return product;
    };

    //!3;
    public async post(product: Product): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll();
        products.push(product);
        await ProductsRepository.saveAll(products);
        return product;
    };

    //!4 exersice;
    public async put(product: Product): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll();
        const index: number = products.findIndex(p => p.id === product.id);
        products[index] = product;
        await ProductsRepository.saveAll(products);
        return product;
    };
};

export default new ProductsService();