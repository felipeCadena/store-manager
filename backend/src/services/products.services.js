const model = require('../models');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();
  return { status: 200, data: allProducts };
};

const getProductById = async (id) => {
  const product = await model.getProductById(id);
  if (!product) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};