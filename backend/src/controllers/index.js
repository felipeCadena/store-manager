const { getAllProducts, getProductById, 
  salveProduct, updateProduct, deleteProduct } = require('./products.controllers');
const { getAllSales, getSalesById, insertSale, deleteSales } = require('./sales.controllers');

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