/**
 * @format
 */
const { GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLJSONObject } = require('graphql-type-json');
const sha1 = require('sha1');
const EntNetwork = require('../ent/EntNetwork');
const EntUser = require('../ent/EntUser');
const EntUserSetting = require('../ent/EntUserSetting');
const EntNetworkEvent = require('../ent/EntNetworkEvent');
const {
  USER_LOGIN_SUCCESS,
  NETWORK_EVENT_CREATED,
  NETWORK_METRICS_UPDATED,
} = require('./subscriptions');
const pubsub = require('./pubsub');
const conn = require('../ent/Conn.js');
const resolvers = {
  Subscription: {
    networkEventCreated: {
      subscribe: async () => await pubsub.asyncIterator(NETWORK_EVENT_CREATED),
    },
    networkMetricsUpdated: {
      subscribe: async () => await pubsub.asyncIterator(NETWORK_METRICS_UPDATED),
    },
    userLoginSuccess: {
      subscribe: async () => await pubsub.asyncIterator(USER_LOGIN_SUCCESS),
    },
  },
  Mutation: {
    login: async (_, args) => {
      const { email, password } = args;
      const entUser = await EntUser.findOne({
        where: {
          email: email,
          password: sha1(password),
        },
      });
      pubsub.publish(USER_LOGIN_SUCCESS, { userLoginSuccess: entUser });
      return entUser;
    },
    createUser: async (_, args) => {
      const { input } = args;
      const { email, firstName, lastName, password } = input;
      input.apiToken = sha1(`${email}-${firstName}-${lastName}-${password}`);
      input.password = sha1(password);
      return await EntUser.create(input);
    },
    createUserSetting: async (_, args) => {
      const { input } = args;
      return await EntUserSetting.create(input);
    },
    updateUserSetting: async (_, args) => {
      const { id, input } = args;
      const entUserSetting = await EntUserSetting.findByPk(id);
      return await entUserSetting.update(input);
    },
  },
  Query: {
    network: async (_, { id }) => {
      return await EntNetwork.findByPk(id);
    },
    networks: async () => {
      return await EntNetwork.findAll({
        order: [['availabilityScore', 'ASC']],
      });
    },
    networkEventTimeline: async (_, { eventUUID }) => {
      return await EntNetworkEvent.findAll({
        where: {
          eventUUID: eventUUID,
        },
        order: [['eventUUID', 'DESC']],
      });
    },
    networkEvents: async (_, { networkId }) => {
      return await EntNetworkEvent.findAll({
        where: {
          networkId: networkId,
        },
        order: [['eventMicrotime', 'DESC'], ['requestId', 'DESC']],
      });
    },
    user: async (_, { id }) => {
      return await EntUser.findByPk(id);
    },
    users: async () => {
      return await EntUser.findAll();
    },
    userSetting: async (_, { id }) => {
      return await EntUserSetting.findByPk(id);
    },
    networkAvailabilityReport: async (_, args) => {
      const queryString = `
      SELECT
          network.id AS networkId,
          network.name AS networkName,
          AVG(operation_time) AS averageOperationTime,
          DAYNAME(FROM_UNIXTIME(event_microtime)) AS dayOfWeek
          FROM network_event
              JOIN network ON network_event.network_id = network.id
          WHERE
              event_type IN(100, 200, 300, 400)
          AND 
              operation_time > 0
          GROUP BY 
              network_id, 
         DAYOFWEEK(FROM_UNIXTIME(event_microtime))
          ORDER BY
         DAYOFWEEK(FROM_UNIXTIME(event_microtime))
      `;
      const result = await conn.query(queryString);
      return result.shift();
    },
  },
  User: {
    settings: async model => {
      const { id } = model;
      return await EntUserSetting.findAll({
        where: {
          userId: id,
        },
      });
    },
  },
  Network: {
    events: async model => {
      const { id } = model;
      return await EntNetworkEvent.findAll({
        where: {
          networkId: id,
        },
      });
    },
  },
  NetworkEvent: {
    network: async model => {
      const { networkId } = model;
      return await EntNetwork.findByPk(networkId);
    },
  },
  DateTime: GraphQLDateTime,
  Json: GraphQLJSONObject,
};

module.exports = resolvers;
