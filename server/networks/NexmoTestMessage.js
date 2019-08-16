/**
 * @format
 */
require('dotenv').config();
const objectPath = require('object-path');
const Nexmo = require('nexmo');
const AbstractTestMessage = require('./AbstractTestMessage.js');
class NexmoTestMessage extends AbstractTestMessage {
  constructor(from, to, messageText, eventUUID) {
    super(from, to, messageText, eventUUID);
    this.configure();
  }

  async send() {
    const options = {
      callback: this.statusCallbackURL,
    };
    console.log(options);
    return new Promise((resolve, reject) => {
      this.client.message.sendSms(
        this.from,
        this.to,
        this.messageText,
        options,
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response);
        }
      );
    });
  }

  configure() {
    this.client = new Nexmo(
      {
        apiKey: '447ea053',
        apiSecret: '2jacCwODdl3Cw4FA',
      },
      {
        debug: false,
      }
    );
    this.networkId = 2;
    this.networkName = 'nexmo';
    this.statusCallbackURL = `${process.env.APP_URL}/callback/${this.networkId}/${this.eventUUID}`;
  }

  getRequestLoggerFieldsMapping(payload) {
    return Object.freeze({
      to: objectPath.get(payload, 'to'),
      accountId: objectPath.get(payload, 'message-id'),
      requestId: objectPath.get(payload, 'message-id'),
      networkId: 2,
    });
  }
}

module.exports = NexmoTestMessage;
