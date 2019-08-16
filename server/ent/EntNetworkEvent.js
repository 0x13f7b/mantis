/**
 * @format
 */
const sequelize = require('sequelize');
const conn = require('./Conn');
const EntNetworkEvent = require('../ent_schema/EntNetworkEventSchema')(conn, sequelize);
const { updateNetworkMetrics } = require('./hooks/EntNetworkEventHooks');
EntNetworkEvent.addHook('afterCreate', 'updateNetworkMetrics', updateNetworkMetrics);
module.exports = EntNetworkEvent;