import { Product } from './product';

import  ProductRepository  from './productRepository';

 class ProductServise{

    constructor(){
        
    }

    public async getAll(){
        const products:Product[] = await ProductRepository.getAll();
        return products;
    }

    
    public async getOne(id:number):Promise<Product>{
        const products:Product[] = await ProductRepository.getAll();
        
        const product:Product = products.find(pru => pru.id === id)!;
        return product;
     
    };

    public async saveAll(product:Product):Promise<Product>{
        const products:Product[] = await ProductRepository.getAll();
        
        product.id = products[products.length -1].id + 1;
        products.push(product);

        await ProductRepository.saveAll(products);
        return product;
    };

    public async put(product:Product):Promise<Product>{
        const products:Product[] = await ProductRepository.getAll();
        
        const index:number = products.findIndex(p => p.id === product.id);
       
        products[index] = product; 

        await ProductRepository.saveAll(products)

        return product;
      
    };

    public async patch(product:Product):Promise<Product>{
        const products:Product[] = await ProductRepository.getAll();
        
        const index:Product = products.find(p => p.id === product.id)!;
       
        for(const key in product){
            if(key in index){
                index[key] = product[key] 
            }
        }
        await ProductRepository.saveAll(products)

        return product;
    }
};

export default new ProductServise()