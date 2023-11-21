const { getAllProducts, getProductById } = require('./products.model');
const { getAllSales, getSalesById } = require('./sales.model');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
};