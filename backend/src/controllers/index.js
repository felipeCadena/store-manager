const { getAllProducts, getProductById, salveProduct } = require('./products.controllers');
const { getAllSales, getSalesById } = require('./sales.controllers');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
  salveProduct,
};