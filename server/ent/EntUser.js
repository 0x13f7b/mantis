/**
 * @format
 */
const EntUser = require('../ent_schema/EntUserSchema')(require('./Conn'), require('sequelize'));
module.exports = EntUser;
