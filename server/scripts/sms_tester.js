/**
 * @format
 */
require('dotenv').config();
const EntNetworkEvent = require('../ent/EntNetworkEvent');
const NetworkEvents = require('../constants/NetworkEvents');
const TwilioTestMessage = require('../networks/TwilioTestMessage');
const NexmoTestMessage = require('../networks/NexmoTestMessage');
const BandwidthTestMessage = require('../networks/BandwidthTestMessage');
const microtime = require('microtime');
const uuidv4 = require('uuid/v4');

const MESSAGE_TYPE = {
  TWILIO: 1,
  NEXMO: 2,
  BANDWIDTH: 3,
};

const prepareNetworkEvent = async messageType => {
  let networkTestMessage = null;
  let networkId = null;
  switch (messageType) {
    case MESSAGE_TYPE.TWILIO:
      networkTestMessage = new TwilioTestMessage('+18189183936', '+18183509957', uuidv4());
      networkId = MESSAGE_TYPE.TWILIO;
      break;
    case MESSAGE_TYPE.NEXMO:
      networkTestMessage = new NexmoTestMessage('12018577804', '18183509957', uuidv4());
      newtworkId = MESSAGE_TYPE.NEXMO;
      break;
    case MESSAGE_TYPE.BANDWIDTH:
      networkTestMessage = new BandwidthTestMessage('+18183222520', '+18183509957', uuidv4());
      netorkId = MESSAGE_TYPE.BANDWIDTH;
      break;
  }
  const pepareTime = microtime.nowDouble();
  const prepareEvent = await EntNetworkEvent.create({
    regionType: 0,
    regionDID: networkTestMessage.to,
    requestId: networkTestMessage.eventUUID,
    eventUUID: networkTestMessage.eventUUID,
    eventMicrotime: pepareTime,
    eventType: NetworkEvents.EVENT_UNIX_TIME_PREPARE,
    networkId: networkId,
  });
  const messageSentTime = microtime.nowDouble();
  const testMessage = await networkTestMessage.send();
  const loggerFieldsMapping = networkTestMessage.getRequestLoggerFieldsMapping(testMessage);
  return {
    regionType: 0,
    regionDID: loggerFieldsMapping.to,
    accountId: loggerFieldsMapping.accountId,
    requestId: loggerFieldsMapping.requestId,
    requestBody: {
      body: testMessage,
    },
    eventUUID: networkTestMessage.eventUUID,
    eventMicrotime: messageSentTime,
    operationTime: messageSentTime - prepareEvent.eventMicrotime,
    eventType: NetworkEvents.EVENT_UNIX_TIME_API_CALL,
    networkId: networkTestMessage.networkId,
  };
};

[1, 2, 3].forEach(element => {
  if (element === 3) {
    return;
  }
  prepareNetworkEvent(element)
    .then(async logObject => {
      return await EntNetworkEvent.create(logObject);
    })
    .catch(async err => {
      console.log(err);
    });
});
