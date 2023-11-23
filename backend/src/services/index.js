const { getAllProducts, getProductById, 
  salveProduct, updateProduct, deleteProduct } = require('./products.services');
const { getAllSales, getSalesById, insertSale, deleteSales } = require('./sales.services');

module.exports = {
  getAllProducts,
  getProductById,
  getAllSales, 
  getSalesById,
  salveProduct,
  insertSale,
  updateProduct,
  deleteProduct,
  deleteSales,
};