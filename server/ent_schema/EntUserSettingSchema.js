"use strict";

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
    tableName: "user_setting"
  };
  const { JSON, INTEGER, STRING } = DataTypes;
  const EntUserSettingSchema = sequelize.define(
    "user_setting",
    {
      id: {
        type: INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "Primary and auto incremented key of the table"
      },
      name: {
        field: "name",
        type: STRING(50),
        allowNull: false,
        comment: "Network region name - will be selected with region id."
      },
      userId: {
        field: "user_id",
        type: INTEGER(11).UNSIGNED,
        references: {
          model: "user",
          key: "id"
        }
      },
      networkType: {
        field: "network_type",
        type: INTEGER(2).UNSIGNED,
        allowNull: false,
        comment: "Network type, can be Nexmo, Twilio or other which will be added as a definition in a constants file"
      },
      accountKey: {
        field: "account_key",
        type: STRING(50),
        allowNull: false,
        comment: "Network account key"
      },
      accountSecretKey: {
        field: "account_secret_key",
        type: STRING(50),
        allowNull: true,
        comment: "Network account secret key"
      },
      accountToken: {
        field: "account_token",
        type: STRING(50),
        allowNull: true,
        comment: "Network account token (for some other networks)"
      },
      apiEndpoint: {
        field: "api_endpoint",
        type: STRING(255),
        allowNull: false,
        comment: "Endpoint (Usually REST)."
      },
      fromNumber: {
        field: "from_number",
        type: STRING(255),
        allowNull: false,
        comment: "From number you want to use this config (Mandatory)."
      },
      segment: {
        field: "segment",
        type: STRING(255),
        allowNull: false,
        comment: "The segment you want to use this config (optional)."
      },
      extra: {
        field: "extra",
        type: JSON,
        allowNull: true,
        defaultValue: {},
        comment: "Network configuration parameters like additional fields. This is dynamic"
      },
      status: {
        field: "status",
        allowNull: true,
        defaultValue: 1,
        type: INTEGER(1).UNSIGNED,
        comment: "Status, default enabled"
      }
    },
    Options
  );
  EntUserSettingSchema.associate = function(models) {
    const { EntUserSchema } = models;
    EntUserSettingSchema.belongsTo(EntUserSchema, {
      foreignKey: "user_id"
    });
  };
  return EntUserSettingSchema;
};
