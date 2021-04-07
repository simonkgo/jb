const productRepository = require("./product-repository");

const get = async () =>{
    const result = await productRepository.get();
    return result
}
const getOne = async (id) =>{
    const products = await productRepository.get();
    const result = products.find(product => product.id===id)
    return result
}

const deleteOne = async (id)=>{
    const products = await productRepository.get();
    const index = products.findIndex(product => product.id===id);
    products.splice(index,0);
    return productRepository.saveAll(products);
}

const patch = async (product)=>{
    const products = await productRepository.get();
    const myProduct = products.find(thisProduct => thisProduct.id===product.id);
    for(const key in product){
        if(key in myProduct){
            myProduct[key]= product[key];
        }
    }
    await productRepository.saveAll(products);
    return myProduct;
}

const put = async (product)=>{
    const products = await productRepository.get();
    const index = products.findIndex(thisProduct => thisProduct.id===product.id);
    products[index] = product;
    await productRepository.saveAll(products);
    return product;
}

const post = async (product)=>{
    const products = await productRepository.get();
    product.id = products[products.length -1].id + 1;
    products.push(product);
    await productRepository.saveAll(products);
    return product;
}

module.exports = {
    get,
    getOne,
    deleteOne,
    patch,
    put,
    post
}