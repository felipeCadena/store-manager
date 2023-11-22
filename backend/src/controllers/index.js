const { getAllProducts, getProductById, salveProduct } = require('./products.controllers');
const { getAllSales, getSalesById, insertSale } = require('./sales.controllers');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
  salveProduct,
  insertSale,
};