import {Product} from "./product";
import productsRepository from "./products-repository";
import ProductsRepository from "./products-repository";

class ProductsService{
    constructor(){

    }

    public async all():Promise<Product[]>{
        const products = await ProductsRepository.getAll();
        return products;
    }

    public async getOne(id:number):Promise<Product>{
        const products:Product[] = await productsRepository.getAll();
        const product:Product = products.find(myProduct => myProduct.id ===id)!;
        return product;
    }
    public async post (product:Product):Promise<Product>{
        const products:Product[] = await productsRepository.getAll();
        product.id = products[products.length -1].id + 1;
        products.push(product);
        await ProductsRepository.saveAll(products);
        return product;
    };

    public async put (product:Product):Promise<Product>{
        const products:Product[] = await productsRepository.getAll();
        const index:number = products.findIndex(myProduct=> myProduct.id===product.id);
        products[index] = product;
        await ProductsRepository.saveAll(products);
        return product;
    };

    public async patch (product:Product):Promise<Product>{
        const products:Product[] = await productsRepository.getAll();
        const productToFind:Product = products.find(myProduct=> myProduct.id===product.id)!;
        for(const key in product){
            if(key in productToFind){
                productToFind[key] = product[key];
            }
        }
        await ProductsRepository.saveAll(products);
        return product;
    };

}
export default new ProductsService();