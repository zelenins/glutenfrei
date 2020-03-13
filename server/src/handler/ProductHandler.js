const productService = require('../service/ProductService');
const responseHandler = require('../infrastructure/response-handler');
const errorHandler = require('../infrastructure/error-handler');

const createProduct = async event => {
  try {
    const data = JSON.parse(event.body);
    const product = await productService.createProduct(data.body);
    return responseHandler(product);
  } catch (error) {
    console.log('Product creation failed', error);
    return errorHandler(error);
  }
};

const deleteProduct = async event => {
  try {
    const id = event.pathParameters.id;
    const product = await productService.deleteProduct(id);
    return responseHandler(product);
  } catch(error) {
    console.log('Product deletion failed', error);
    return errorHandler(error);
  }
}

const getProducts = async () => {
  try {
    const products = await productService.getProducts();
    return responseHandler(products);
  }catch(error) {
    return errorHandler(error);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts
};