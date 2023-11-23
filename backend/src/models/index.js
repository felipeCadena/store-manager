const { getAllProducts, getProductById, salveProduct, 
  updateProduct, deleteProduct, searchProducts } = require('./products.model');
const { getAllSales, getSalesById, insertSale, 
  deleteSales, updateSaleQuantity } = require('./sales.model');

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