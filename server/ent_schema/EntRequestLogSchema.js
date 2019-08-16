'use strict';

/**
 * @format
 * @param sequelize
 * @param DataTypes
 * @returns {never|Model|void}
 */
module.exports = (sequelize, DataTypes) => {
  const Options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'request_log'
  };
  const { STRING, INTEGER, TEXT, JSON } = DataTypes;
  const EntRequestLogSchema = sequelize.define(
    'request_log',
    {
      id: {
        type: INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Primary and auto incremented key of the table',
      },
      requestData: {
        field: 'request_data',
        type: JSON,
        allowNull: true,
        comment: 'Request Data',
      },
      responseData: {
        field: 'responseData',
        type: JSON,
        allowNull: true,
        comment: 'Response Data',
      },
      statusCode: {
        field: 'status_code',
        allowNull: true,
        defaultValue: 0,
        type: INTEGER.UNSIGNED,
        comment: 'Status code'
      },
      status: {
        field: 'status',
        allowNull: true,
        defaultValue: 1,
        type: INTEGER(1).UNSIGNED,
        comment: 'Status, default enabled'
      },
    },
    Options,
  );
  return EntRequestLogSchema;
};
