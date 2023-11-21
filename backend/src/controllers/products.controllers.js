const service = require('../services');

const getAllProducts = async (_req, res) => {
  const { status, data } = await service.getAllProducts();
  res.status(status).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await service.getProductById(id);
  res.status(status).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
};