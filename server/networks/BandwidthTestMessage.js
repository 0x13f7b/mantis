/**
 * @format
 */
require('dotenv').config();
const objectPath = require('object-path');
const Bandwidth = require('node-bandwidth');
const AbstractTestMessage = require('./AbstractTestMessage.js');
class BandwidthTestMessage extends AbstractTestMessage {
  constructor(from, to, messageText, eventUUID) {
    super(from, to, messageText, eventUUID);
    this.configure();
  }

  async send() {
    return this.client.Message.send({
      from: this.from,
      to: this.to,
      text: this.messageText,
      callbackUrl: this.statusCallbackURL,
    });
  }

  configure() {
    this.client = new Bandwidth({
      userId: 'u-3wehcb3eyvlfsdbrekiapri',
      apiToken: 't-2dfesb273fd7x4swnaxvh4a',
      apiSecret: 'zvdgrot6bzbdxfbgrbqsghtap6bitbh4nl4myoy',
    });
    this.networkId = 3;
    this.networkName = 'bandwidth';
    this.statusCallbackURL = `${process.env.APP_URL}/callback/${this.networkId}/${this.eventUUID}`;
  }

  getRequestLoggerFieldsMapping(payload) {
    return Object.freeze({
      to: objectPath.get(payload, 'to'),
      accountId: objectPath.get(payload, 'id'),
      requestId: objectPath.get(payload, 'id'),
      networkId: 3,
    });
  }
}

module.exports = BandwidthTestMessage;
