const productRepository = require("./product-repository");

const get = async () => {
    const result = await productRepository.get();
    return result;
};

module.exports = {
    get
};