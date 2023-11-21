const { getAllProducts, getProductById, salveProduct } = require('./products.services');
const { getAllSales, getSalesById } = require('./sales.services');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales, 
  getSalesById,
  salveProduct,
};