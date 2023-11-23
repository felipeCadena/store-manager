const { getAllProducts, getProductById, 
  salveProduct, updateProduct } = require('./products.controllers');
const { getAllSales, getSalesById, insertSale } = require('./sales.controllers');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
  salveProduct,
  insertSale,
  updateProduct,
};