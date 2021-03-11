import { Product } from './product';
import ProductsRepository from './products-repository';

class ProductsService {
    constructor() {
    };

    //פונקציה שמחזירה את מערך המוצרים מהריפוזיטורי;
    //---;
    public async all(): Promise<Product[]> {
        //נביא את כל המוצרים מהריפו;
        const products: Product[] = await ProductsRepository.getAll();

        //להחזיר רשימת מוצרים;
        return products;
    };

    //id פונקציה שתחזיר מוצר אחד לפי;
    //---;
    public async getOne(id: number): Promise<Product> {
        //נביא את כל המוצרים מהריפו;
        const products: Product[] = await ProductsRepository.getAll();

        //נמצא את המוצר שהלקוח ביקש לפי האיידי;
        const product: Product = products.find(p => p.id === id)!;

        //להחזיר רשימת מוצרים;
        return product;
    };

    //פונקציה שתוסיף מוצר חדש;
    //---;
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

    //פונקציה שמשנה את האובייקט במלואו;
    //---;
    public async put(product: Product): Promise<Product> {
        //נביא את כל המוצרים מהריפו;
        const products: Product[] = await ProductsRepository.getAll();

        //נמצא את מספר האינדקס של המוצר בתוך המערך;
        const index: number = products.findIndex(p => p.id === product.id);

        //החלפה של המוצר במערך במוצר החדש שנשלח מהקליינט;
        products[index] = product;

        //לשמור בקובץ את המערך המעודכן;
        await ProductsRepository.saveAll(products);

        //החזרת המוצר בחזרה ללקוח;
        return product;
    };

    //פונקציה שמשנה את האובייקט חלקית;
    //---;
    public async patch(product: Product): Promise<Product> {
        //נביא את כל המוצרים מהריפו;
        const products: Product[] = await ProductsRepository.getAll();

        //מציאה של המוצר שאותו הקליינט רוצה לעדכן בהתאם לאידי ששלח;
        const productToFetch: Product = products.find(p => p.id === product.id)!;

        //ריצה על מפתחות של המוצר שהקליינט שלח ועדכון של המוצר במערך;
        for(const key in product){
            if (key in productToFetch){
                productToFetch[key] = product[key]
            };
        };

        //שמירה בחזרה במערך בקובץ אחרי העדכון;
        await ProductsRepository.saveAll(products);

        //החזרת המוצר בחזרה ללקוח;
        return product;
    };
};

export default new ProductsService();