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

    public async put(product: Product):Promise<Product> {
        const products:Product[] = await ProductsRepository.getAll();
        const index:number = products.findIndex(p=>p.id===product.id);
        products[index] = product;
        await ProductsRepository.saveAll(products);
        return product;
    }

    public async patch(product: Product):Promise<Product> {
        const products:Product[] = await ProductsRepository.getAll();
        const oldProduct:Product = products.find(p=>p.id===product.id)!;
        for(const key in product){
            if(key in oldProduct){
                oldProduct[key] = product[key];
            };
        };
        // product.name ? oldProduct.name = product.name : null;
        // product.price ? oldProduct.price = product.price : null;
        // product.stock ? oldProduct.stock = product.stock : null;
        await ProductsRepository.saveAll(products);
        return oldProduct;
    }

    public async delete(id:number) {
        const products:Product[] = await ProductsRepository.getAll();
        const index:number = products.findIndex(p => p.id ===id);
        products.splice(index,1);
        await ProductsRepository.saveAll(products);
        return products;
    }
}

export default new ProductsService();
