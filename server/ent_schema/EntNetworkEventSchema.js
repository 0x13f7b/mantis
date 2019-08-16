/**
 * @format
 */
const EntNetwork = require('../ent/EntNetwork');
/**
 * @format
 * @param sequelize
 * @param DataTypes
 * @returns {never|Model|void}
 */

const NetworkEvents = require('../constants/NetworkEvents');

module.exports = (sequelize, DataTypes) => {
  const Options = {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'network_event',
  };
  const { DOUBLE, FLOAT, INTEGER, JSON, STRING, TEXT } = DataTypes;
  const EntNetworkEventSchema = sequelize.define(
    'network_event',
    {
      id: {
        type: INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Primary and auto incremented key of the table',
      },
      regionType: {
        field: 'region_type',
        allowNull: true,
        defaultValue: 0,
        type: INTEGER(1).UNSIGNED,
        comment: 'Region type ID, default 0 (unknown) and will select the application default one.',
      },
      regionDID: {
        field: 'region_did',
        type: STRING(50),
        allowNull: true,
        comment: 'Network region DID (Direct Inbound Dialing).',
      },
      regionName: {
        field: 'region_name',
        type: STRING(50),
        allowNull: true,
        comment: 'Network region name - will be selected with region id.',
      },
      networkId: {
        field: 'network_id',
        type: INTEGER(2).UNSIGNED,
        references: {
          model: 'network',
          key: 'id',
        },
      },
      eventUUID: {
        field: 'event_uuid',
        type: STRING(40),
        allowNull: false,
        comment: 'Even uuid or hash or sha1.',
      },
      eventMicrotime: {
        field: 'event_microtime',
        type: DOUBLE,
        allowNull: true,
        defaultValue: 0,
        comment: 'The Unix timestamp (microtime) when the event happened.',
      },
      eventType: {
        field: 'event_type',
        allowNull: true,
        defaultValue: NetworkEvents.EVENT_NONE,
        type: INTEGER.UNSIGNED,
        comment: 'Status => network was/is active and reachable.',
      },
      operationTime: {
        field: 'operation_time',
        type: DOUBLE,
        allowNull: true,
        defaultValue: 0,
        comment: 'Time between operations (api call, responses, etc) (ms).',
      },
      score: {
        field: 'score',
        type: DOUBLE,
        allowNull: true,
        defaultValue: 0,
        comment:
          'Overall network region availability score for this metric (calculated based on the speed).',
      },
      requestId: {
        field: 'requestId',
        type: STRING(255),
        allowNull: true,
        comment: 'Need to have a unique request id, can be sms/mms/call id.',
      },
      requestBody: {
        field: 'request_body',
        type: JSON,
        allowNull: true,
        comment: 'Body of a request (sms, image content or whatever).',
      },
      accountId: {
        field: 'accountId',
        type: STRING(255),
        allowNull: true,
        comment:
          "The account id associated with the request, can be blank but it's recommended to have it here as well.",
      },
      status: {
        field: 'status',
        allowNull: true,
        defaultValue: 1,
        type: INTEGER(1).UNSIGNED,
        comment: 'Status => network was/is active and reachable.',
      },
    },
    Options
  );
  EntNetworkEventSchema.associate = function(models) {
    const { EntNetworkSchema } = models;
    EntNetworkRegionSchema.belongsTo(EntNetworkSchema, {
      foreignKey: 'network_id',
    });
  };
  return EntNetworkEventSchema;
};
