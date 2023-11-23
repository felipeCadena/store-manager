const router = require('express').Router();
const controller = require('../controllers');
const validateSales = require('../middlewares/validateSales.middlewares');
const validateSalesProducts = require('../middlewares/validateSalesProducts.middlewares');
const validateSalesQuantity = require('../middlewares/validateSaleQuantity.middlewares');

router.put(
  '/:id/products/:productId/quantity', 
  validateSalesQuantity,
  controller.updateSaleQuantity,
);
router.post('/', validateSales, validateSalesProducts, controller.insertSale);
router.get('/', controller.getAllSales);
router.get('/:id', controller.getSalesById);
router.delete('/:id', controller.deleteSales);

module.exports = router;