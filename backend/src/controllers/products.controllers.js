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

const salveProduct = async (req, res) => {
  const name = req.body;
  const { status, data } = await service.salveProduct(name);
  const product = await service.getProductById(data); 
  res.status(status).json(product.data);
};

module.exports = {
  getAllProducts,
  getProductById,
  salveProduct,
};