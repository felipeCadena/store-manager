const connection = require('../db/connection');

const getAllProducts = async () => {
  const [allProducts] = await connection.execute('SELECT * FROM products');
  return allProducts;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const salveProduct = async (data) => {
  const [insert] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [data.name]);
  return insert;
};

const updateProduct = async (name, id) => {
  const [{ affectedRows }] = await connection
    .execute('UPDATE products SET name = ? WHERE id = ?', [name, id]);
  return affectedRows;
};

const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection
    .execute('DELETE FROM products WHERE id = ?', [id]);
  return affectedRows;
};

const searchProducts = async (q) => {
  const [products] = await connection
    .execute('SELECT * FROM products WHERE name LIKE ?', [`%${q}%`]);
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
  salveProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};