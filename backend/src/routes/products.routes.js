const router = require('express').Router();
const controller = require('../controllers');
const validateProducts = require('../middlewares/validateProducts.middlewares');

router.get('/search', controller.searchProducts);
router.post('/', validateProducts, controller.salveProduct);
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', validateProducts, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;