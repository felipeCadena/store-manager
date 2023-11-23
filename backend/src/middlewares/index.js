const validateProducts = require('./validateProducts.middlewares');
const validateSales = require('./validateSales.middlewares');
const validateSalesProducts = require('./validateSalesProducts.middlewares');
const validateSalesQuantity = require('./validateSaleQuantity.middlewares');

module.exports = {
  validateProducts,
  validateSales,
  validateSalesProducts,
  validateSalesQuantity,
};