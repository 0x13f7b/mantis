/**
 * @format
 */
require('dotenv').config();
const NetworkEvents = require('../constants/NetworkEvents');
const EntNetworkEvent = require('../ent/EntNetworkEvent');
const pubsub = require('../graphql/pubsub');
const { NETWORK_EVENT_CREATED } = require('../graphql/subscriptions');

const createEventWithOperationTime = async (
  regionType,
  regionDID,
  accountId,
  requestId,
  requestBody,
  eventUUID,
  eventMicrotime,
  eventType,
  networkId
) => {
  const initialEvent = await EntNetworkEvent.findOne({
    where: {
      eventUUID: eventUUID,
      eventType: NetworkEvents.EVENT_UNIX_TIME_API_CALL,
      networkId: networkId,
    },
    attributes: ['eventMicrotime'],
  });
  const operationTime = eventMicrotime - initialEvent.eventMicrotime;
  const event = await EntNetworkEvent.create({
    regionType: regionType,
    regionDID: regionDID,
    accountId: accountId,
    requestId: requestId,
    requestBody: {
      body: requestBody,
    },
    eventUUID: eventUUID,
    eventMicrotime: eventMicrotime,
    operationTime: operationTime,
    eventType: eventType,
    networkId: networkId,
  });
  return event;
};
module.exports = {
  createEventWithOperationTime,
};
