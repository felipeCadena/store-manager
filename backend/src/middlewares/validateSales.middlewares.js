module.exports = (req, res, next) => {
  const data = req.body;
  
  if (data.some(({ quantity }) => quantity <= 0)) {
    return res.status(422).json({ 
      message: '"quantity" must be greater than or equal to 1', 
    });
  } 
  
  if (data.some(({ quantity }) => !quantity)) {
    return res.status(400).json({ message: '"quantity" is required' });
  } 
  
  if (data.some(({ productId }) => !productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  } 
  
  next();
};