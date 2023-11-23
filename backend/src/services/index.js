const { getAllProducts, getProductById, 
  salveProduct, updateProduct, deleteProduct, searchProducts } = require('./products.services');
const { getAllSales, getSalesById, insertSale, 
  deleteSales, updateSaleQuantity } = require('./sales.services');

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
  updateSaleQuantity,
  searchProducts,
};