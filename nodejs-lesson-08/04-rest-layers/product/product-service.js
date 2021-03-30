const productRepository = require("./product-repository");

//Get all products;
const get = async () => {
    const products = await productRepository.get();
    return products;
};

//Add new product; 
const post = async (product) => {
    const products = await productRepository.get();
    product.id = products[products.length - 1].id + 1; // Find new id.
    products.push(product);
    await productRepository.save(products);
    return product;
};

//Update partial product;
const patch = async (product) => {
    const products = await productRepository.get();
    const index = products.findIndex(p => p.id === product.id);
    if (index === -1) return null;
    const productToUpdate = products[index];
    for (const prop in product) {
        if (product[prop] !== undefined) {
            productToUpdate[prop] = product[prop];
        };
    };
    await productRepository.save(products);
    return product;
};

module.exports = {
    get,
    post,
    patch,
};







// // Get one product: 
// async function getOneProductAsync(id) {
//     const products = await dal.getAllProductsAsync();
//     const product = products.find(p => p.id === id);
//     return product;
// }

// // Update full product: 
// async function updateFullProduct(product) {
//     const products = await dal.getAllProductsAsync();
//     const index = products.findIndex(p => p.id === product.id);
//     if (index === -1) return null;
//     products[index] = product;
//     await dal.saveAllProductsAsync(products);
//     return product;
// }



// // Delete product:
// async function deleteProduct(id) {
//     const products = await dal.getAllProductsAsync();
//     const index = products.findIndex(p => p.id === id);
//     if (index === -1) return;
//     products.splice(index, 1);
//     await dal.saveAllProductsAsync(products);
// }