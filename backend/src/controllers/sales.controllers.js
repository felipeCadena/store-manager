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

const insertSale = async (req, res) => {
  const arrayData = req.body;
  const { status, data } = await service.insertSale(arrayData);
  res.status(status).json(data);
};

const updateSaleQuantity = async (req, res) => {
  const { id, productId } = req.params;
  const { quantity } = req.body;
  await service.updateSaleQuantity(quantity, productId);
  const { status, data } = await service.getSalesById(id);

  const response = data.find((a) => a.productId === Number(productId));
  res.status(status).json({ ...response, saleId: Number(id) });
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await service.deleteSales(id);
  res.status(status).json(data);
};

module.exports = {
  getAllSales,
  getSalesById,
  insertSale,
  deleteSales,
  updateSaleQuantity,
};