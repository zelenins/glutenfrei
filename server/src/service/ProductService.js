const { dynamoDB } = require('../infrastructure/dynamoDbLib');
const uuid = require('uuid');

const createProduct = async data => {
  console.log(data.name);
  const params = {
    TableName: process.env.PRODUCT_TABLE,
    Item: {
      id: uuid.v1(),
      name: data.name,
      description: data.description,
      region: data.region,
      manufacturer: data.manufacturer,
      shops: data.shops,
      glutenFreeCertified: data.glutenFreeCertified
    }
  }
  await dynamoDB.put(params).promise();
  return params.Item;
};

const getProducts = async () => {
  const params = {
    TableName: process.env.PRODUCT_TABLE
  }
  const products = await dynamoDB.scan(params).promise();
  return products;
}

module.exports = {
  createProduct,
  getProducts
}