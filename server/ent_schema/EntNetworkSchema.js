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
    tableName: 'network'
  };
  const { DOUBLE, STRING, FLOAT, INTEGER } = DataTypes;
  const EntNetworkSchema = sequelize.define('network', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Primary and auto incremented key of the table.',
    },
    name: {
      field: "name",
      type: STRING(10),
      allowNull: false,
      comment: 'Network name',
    },
    overallScore: {
      field: "overall_score",
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Network overall (availability) score.',
    },
    availabilityScore: {
      field: "availability_score",
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Network availability score.',
    },
    averageOperationTime: {
      field: "average_operation_time",
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Network average time between operations.',
    },
    failures: {
      field: "failures",
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: 'Totla failures based on the events.',
    },
    lowestBandwidth: {
      field: 'lowest_bandwidth',
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Determine how many simultaneous Client calls your network can support.',
    },
    averageBandwidth: {
      field: 'average_bandwidth',
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Determine how many simultaneous Client calls your network can support.',
    },
    highestBandwidth: {
      field: 'highest_bandwidth',
      type: FLOAT,
      allowNull: true,
      defaultValue: 0,
      comment: 'Determine how many simultaneous Client calls your network can support.',
    },
    priority: {
      field: "priority",
      type: INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: 'Zero (and calculated by score) or if user-override will calculate by both.',
    },
    status: {
      field: 'status',
      allowNull: true,
      defaultValue: 1,
      type: INTEGER(1).UNSIGNED,
      comment: 'Status, default enabled'
    },
  }, Options);
  EntNetworkSchema.associate = function(models) {
    const { EntNetworkEventSchema } = models;
    EntNetworkSchema.hasMany(EntNetworkEventSchema,{
      foreignKey:"id",
      onDelete:"cascade"
    });
  };
  return EntNetworkSchema;
};