import { API } from 'aws-amplify';

const getProducts = async () => {
  try {
    const accounts = await API.get('products', '/products');
    return accounts.Items;
  }catch(error) {
    console.log(error);
  }
}

export {
  getProducts,
}