import { Product } from "./product"
import ProductsRepository from './producs-repository'

class ProductsService {
    constructor() {

    }
    public async all(): Promise<Product[]> {
        const products: Product[] = await ProductsRepository.getAll()
        return products
    }

    public async getOne(id: number): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll()
        const product: Product = products.find(prod => prod.id === id)!
        return product
    }
    public async post(product: Product): Promise<Product> {
        //נביא את כל המוצרים מהריפו;
        const products: Product[] = await ProductsRepository.getAll();

        //תיתן לי את האובייקט האחרון במערך ותוסיף לאידי שלו 1;
        product.id = products[products.length - 1].id + 1;

        //הוספה של המוצר למערך המוצרים;
        products.push(product);

        //שמירת המערך בחזרה לקובץ אחרי ההוספה של המוצר החדש;
        await ProductsRepository.saveAll(products);

        //החזרת המוצר בחזרה ללקוח;
        return product;
    };

    public async put(product: Product): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll()
        const index = products.findIndex(prod => prod.id === product.id)
        products[index] = product
        await ProductsRepository.saveAll(products)
        return product


    }

    public async patch(product: Product): Promise<Product> {
        const products: Product[] = await ProductsRepository.getAll()
        const result: Product = products.find(p => p.id === product.id)!
        for (const key in product) {
            if (key in result) {
                result[key] = product[key]
            }
        }
        await ProductsRepository.saveAll(products)
        return product

    }
}

export default new ProductsService()