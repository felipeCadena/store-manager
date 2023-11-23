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

const insertSale = async (data) => {
  const insertId = await model.insertSale(data);
  const newData = {
    id: insertId,
    itemsSold: data.map((itens) => ({
      productId: itens.productId,
      quantity: itens.quantity,
    })),
  }; 
  return { status: 201, data: newData };
};

const updateSaleQuantity = async (id, quantity) => {
  const affectedRows = await model.updateSaleQuantity(quantity, id);
  return { status: 200, data: affectedRows };
};

const deleteSales = async (id) => {
  const affectedRows = await model.deleteSales(id);
  if (!affectedRows) return { status: 404, data: { message: 'Sale not found' } };
  return { status: 204, data: affectedRows };
};

module.exports = {
  getAllSales,
  getSalesById,
  insertSale,
  deleteSales,
  updateSaleQuantity,
};