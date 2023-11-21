const camileze = require('camelize');
const connection = require('../db/connection');

const getAllSales = async () => {
  const [allSales] = await connection.execute(
    `SELECT p.sale_id, s.date, p.product_id, p.quantity
    FROM sales as s
    INNER JOIN sales_products as p
    ON p.sale_id = s.id
    ORDER BY p.sale_id, product_id`,
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

module.exports = {
  getAllSales,
  getSalesById,
};