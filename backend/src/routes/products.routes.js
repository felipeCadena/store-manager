const router = require('express').Router();
const model = require('../models');

router.get('/', async (_req, res) => {
  const [allProducts] = await model.getAllProducts();
  res.status(200).json(allProducts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [[product]] = await model.getProductById(id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});

module.exports = router;