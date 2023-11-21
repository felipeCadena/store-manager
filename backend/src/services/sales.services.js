const model = require('../models');

const getAllSales = async () => {
  const sales = await model.getAllSales();
  return { status: 200, data: sales };
};

const getSalesById = async (id) => {
  const sale = await model.getSalesById(id);
  if (sale.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sale };
};

module.exports = {
  getAllSales,
  getSalesById,
};