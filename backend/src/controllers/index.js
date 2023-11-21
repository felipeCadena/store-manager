const { getAllProducts, getProductById } = require('./products.controllers');
const { getAllSales, getSalesById } = require('./sales.controllers');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
};