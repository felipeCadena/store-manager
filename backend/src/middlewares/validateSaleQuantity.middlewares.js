const model = require('../models');

module.exports = async (req, res, next) => {
  const { quantity } = req.body;
  const { id, productId } = req.params;
  
  if (quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' }); 
  }

  if (quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  
  const product = await model.getProductById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found in sale' });

  const sale = await model.getSalesById(id);
  if (!sale.length) return res.status(404).json({ message: 'Sale not found' });

  next();
};