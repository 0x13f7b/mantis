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
    tableName: 'user'
  };
  const { STRING, INTEGER, TEXT } = DataTypes;
  const EntUserSchema = sequelize.define(
    'user',
    {
      id: {
        type: INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Primary and auto incremented key of the table',
      },
      companyName: {
        field: 'company_name',
        type: STRING(150),
        allowNull: true,
        comment: 'Company Name',
      },
      firstName: {
        field: 'first_name',
        type: STRING(150),
        allowNull: false,
      },
      lastName: {
        field: 'last_name',
        type: STRING(150),
        allowNull: false,
      },
      email: {
        field: 'email',
        type: STRING(100),
        allowNull: true,
      },
      password: {
        field: 'password',
        type: STRING(40),
        allowNull: true,
      },
      phone: {
        field: 'phone',
        type: STRING(20),
        allowNull: true,
      },
      city: {
        field: 'city',
        type: STRING(100),
        allowNull: true,
      },
      state: {
        field: 'state',
        type: STRING(50),
        allowNull: true,
      },
      country: {
        field: 'country',
        type: STRING(50),
        allowNull: true,
      },
      postalCode: {
        field: 'postal_code',
        type: STRING(10),
        allowNull: true,
      },
      addressLine1: {
        field: 'address_line_1',
        type: STRING,
        allowNull: true
      },
      addressLine2: {
        field: 'address_line_2',
        type: STRING(255),
        allowNull: true
      },
      apiToken: {
        field: 'api_token',
        type: TEXT,
        allowNull: true
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
  EntUserSchema.associate = function(models) {
    const { EntUserSettingSchema } = models;
    EntUserSchema.hasMany(EntUserSettingSchema, {
      foreignKey:"id",
      onDelete:"cascade"
    });
  };
  return EntUserSchema;
};
