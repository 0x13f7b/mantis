/**
 * @format
 */
const EntUserSetting = require('../ent_schema/EntUserSettingSchema')(
  require('./Conn'),
  require('sequelize')
);
module.exports = EntUserSetting;
