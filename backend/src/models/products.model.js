// const camileze = require('camelize');
const connection = require('../db/connection');

const getAllProducts = async () => {
  const [allProducts] = await connection.execute('SELECT * FROM products');
  return allProducts;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const salveProduct = async (data) => {
  const [insert] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [data.name]);
  return insert;
};

module.exports = {
  getAllProducts,
  getProductById,
  salveProduct,
};