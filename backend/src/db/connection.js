const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'StoreManager',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;