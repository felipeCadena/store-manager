const connection = require('../db/connection');

const getAllProducts = async () => {
  const [allProducts] = await connection.execute('SELECT * FROM products');
  return allProducts;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};