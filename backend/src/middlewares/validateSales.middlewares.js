module.exports = (req, res, next) => {
  const data = req.body;
  data.map(({ productId, quantity }) => {
    if (!productId) return res.status(400).json({ message: '"productId" is required' });
    if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
    if (quantity <= 0) {
      return res.status(422).json({ 
        message: '"quantity" must be greater than or equal to 1', 
      });
    }
    return true;
  });
  next();
};