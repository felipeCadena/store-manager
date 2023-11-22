const router = require('express').Router();
const controller = require('../controllers');
// const validateSales = require('../middlewares/validateSales.middlewares');

router.post('/', controller.insertSale);
router.get('/', controller.getAllSales);
router.get('/:id', controller.getSalesById);

module.exports = router;