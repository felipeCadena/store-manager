const model = require('../models');

module.exports = async (req, res, next) => {
  const data = req.body;

  const validate = data.map(({ productId }) => model.getProductById(productId));
  const validateData = await Promise.all(validate);
  
  if (validateData.includes(undefined)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};