const { getAllProducts, getProductById, salveProduct } = require('./products.model');
const { getAllSales, getSalesById } = require('./sales.model');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
  salveProduct,
};