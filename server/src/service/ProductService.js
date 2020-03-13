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
      glutenFreeCertified: data.glutenFreeCertified,
      image: data.image
    }
  }
  await dynamoDB.put(params).promise();
  return params.Item;
};

const deleteProduct = id => {
  const params = {
    TableName: process.env.PRODUCT_TABLE,
    Key: {
      'id': id
    },
    ReturnValues: 'ALL_OLD'
  }
  return dynamoDB.delete(params).promise();
}

const getProducts = async () => {
  const params = {
    TableName: process.env.PRODUCT_TABLE
  }
  const products = await dynamoDB.scan(params).promise();
  return products;
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts
}