const service = require('../services');

const getAllSales = async (_req, res) => {
  const { status, data } = await service.getAllSales();
  res.status(status).json(data);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await service.getSalesById(id);
  res.status(status).json(data);
};

module.exports = {
  getAllSales,
  getSalesById,
};