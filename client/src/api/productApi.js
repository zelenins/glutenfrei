import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../graphql/queries';

const getProducts = async () => {
  try {
    const products = await API.graphql(graphqlOperation(listProducts));
    return products.data.listProducts.items;
  }catch(error) {
    console.log(error);
  }
}

export {
  getProducts,
}