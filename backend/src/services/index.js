const { getAllProducts, getProductById, salveProduct } = require('./products.services');
const { getAllSales, getSalesById, insertSale } = require('./sales.services');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales, 
  getSalesById,
  salveProduct,
  insertSale,
};