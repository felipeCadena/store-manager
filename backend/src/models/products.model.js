const connection = require('../db/connection');

const getAllProducts = async () => {
  const result = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};