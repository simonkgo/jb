const productsRepository = require('./products-repository')




const get = async () => {
    const products = await productsRepository.get()
    return products
}

const getOne = async (id) => {
    const products = await productsRepository.get()
    const product = products.find(P => P.id === id)
    return product
}
const post = async (product) => {
    const products = await productsRepository.get()
    product.id = products[products.length - 1].id + 1
    products.push(product)
    await productsRepository.saveAll(products)
    return products

}
const put = async (product) => {
    const products = await productsRepository.get()
    const isProductIndexValid = products.findIndex(p => p.id === product.id)
    if (isProductIndexValid === -1) {
        return isProductIndexValid
    }
    else {
        products[isProductIndexValid] = product
        await productsRepository.saveAll(products)
        return products
    }
}


const patch = async (product) => {
    const products = await productsRepository.get()
    const productToFetch = products.find(p => p.id === product.id)
    if (!productToFetch) {
        return productToFetch
    }
    else {
        for (const key in product) {
            if (key in productToFetch) {
                productToFetch[key] = product[key]
            }
        }
        await productsRepository.saveAll(products)
        return products
    }


}
const deleteId = async (id) => {
    const result = await productsRepository.get()
    const index = result.findIndex(P => P.id === id)
    result.splice(index, 1)
    console.log(result);
    await productsRepository.saveAll(result)
    return result

}
module.exports = { get, getOne, deleteId, post, put, patch }