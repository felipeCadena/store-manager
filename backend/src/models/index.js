const { getAllProducts, getProductById, salveProduct, 
  updateProduct, deleteProduct } = require('./products.model');
const { getAllSales, getSalesById, insertSale, deleteSales } = require('./sales.model');

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