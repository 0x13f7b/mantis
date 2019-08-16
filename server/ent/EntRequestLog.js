/**
 * @format
 */
const EntRequestLog = require('../ent_schema/EntRequestLogSchema')(
  require('./Conn'),
  require('sequelize')
);
module.exports = EntRequestLog;
