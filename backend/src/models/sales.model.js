const camileze = require('camelize');
const connection = require('../db/connection');

const getAllSales = async () => {
  const [allSales] = await connection.execute(
    `SELECT p.sale_id, s.date, p.product_id, p.quantity
    FROM sales as s
    INNER JOIN sales_products as p
    ON p.sale_id = s.id
    ORDER BY p.sale_id, p.product_id`,
  );
  return camileze(allSales);
};

const getSalesById = async (id) => {
  const [sale] = await connection.execute(`SELECT s.date, p.product_id, p.quantity
    FROM sales as s
    INNER JOIN sales_products as p
    ON p.sale_id = s.id
    WHERE s.id = ?`, [id]);
  return camileze(sale);
};

const insertSale = async (data) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  const insert = data.map(({ productId, quantity }) => connection
    .execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, productId, quantity],
    ));
  await Promise.all(insert);
  return insertId;
};

const updateSaleQuantity = async (id, quantity) => {
  const [{ affectedRows }] = await connection
    .execute('UPDATE sales_products SET quantity = ? WHERE product_id = ?', [quantity, id]);
  return affectedRows;
};

const deleteSales = async (id) => {
  const [{ affectedRows }] = await connection
    .execute('DELETE FROM sales WHERE id = ?', [id]);
  return affectedRows;
};

module.exports = {
  getAllSales,
  getSalesById,
  insertSale,
  deleteSales,
  updateSaleQuantity,
};