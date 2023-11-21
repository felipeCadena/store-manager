const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.getAllSales);
router.get('/:id', controller.getSalesById);

module.exports = router;