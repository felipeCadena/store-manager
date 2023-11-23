const { getAllProducts, getProductById, salveProduct, 
  updateProduct, deleteProduct } = require('./products.model');
const { getAllSales, getSalesById, insertSale } = require('./sales.model');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales,
  getSalesById,
  salveProduct,
  insertSale,
  updateProduct,
  deleteProduct,
};