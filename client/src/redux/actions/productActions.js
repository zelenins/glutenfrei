import * as types from './actionTypes';
import * as productApi from '../../api/productApi';

const createProduct = product => {
  return { type: types.CREATE_COURSE, product };
};

const loadProducts = () => {
  return function (dispatch) {
    return productApi.getProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw error;
    })
  }
};

const loadProductsSuccess = products => {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
};

export {
  createProduct,
  loadProducts
}