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

const salveProduct = async (data) => {
  const { insertId } = await model.salveProduct(data);
  return { status: 201, data: insertId };
};

const updateProduct = async (name, id) => {
  const affectedRows = await model.updateProduct(name, id);
  if (!affectedRows) return { status: 404, data: { message: 'Product not found' } };
  return { status: 200, data: affectedRows };
};

const deleteProduct = async (id) => {
  const affectedRows = await model.deleteProduct(id);
  if (!affectedRows) return { status: 404, data: { message: 'Product not found' } };
  return { status: 204, data: affectedRows };
};

const searchProducts = async (q) => {
  const products = await model.searchProducts(q);
  const allProducts = await model.getAllProducts();
  if (!q) return { status: 200, data: allProducts };
  if (!products.length) return { status: 200, data: products };
  return { status: 200, data: products };
};

module.exports = {
  getAllProducts,
  getProductById,
  salveProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};