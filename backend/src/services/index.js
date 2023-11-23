const { getAllProducts, getProductById, 
  salveProduct, updateProduct } = require('./products.services');
const { getAllSales, getSalesById, insertSale } = require('./sales.services');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales, 
  getSalesById,
  salveProduct,
  insertSale,
  updateProduct,
};