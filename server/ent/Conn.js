/**
 * @format
 * @type {any}
 */
const Sequelize = require('sequelize');
const Conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  sync: { force: false },
  logging: false,
});

module.exports = Conn;
