/**
 * @format
 */
const EntNetwork = require('../ent_schema/EntNetworkSchema')(
  require('./Conn'),
  require('sequelize')
);
module.exports = EntNetwork;
