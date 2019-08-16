/**
 * @format
 */
require('dotenv').config();
const objectPath = require('object-path');
const Twilio = require('twilio');
const AbstractTestMessage = require('./AbstractTestMessage.js');
class TwilioTestMessage extends AbstractTestMessage {
  constructor(from, to, messageText, eventUUID) {
    super(from, to, messageText, eventUUID);
    this.configure();
  }

  async send() {
    return this.client.messages.create({
      body: this.messageText,
      to: this.to,
      from: this.from,
      provideFeeedback: true,
      statusCallback: this.statusCallbackURL,
    });
  }

  configure() {
    const accountSid = 'ACd78d36ee359e7bc773c3b567a75f07ba';
    const authToken = 'ddb85150b2e4fa5eab66c41aafce3112';
    this.client = new Twilio(accountSid, authToken);
    this.networkId = 1;
    this.networkName = 'twilio';
    this.statusCallbackURL = `${process.env.APP_URL}/callback/${this.networkId}/${this.eventUUID}`;
  }

  getRequestLoggerFieldsMapping(payload) {
    return Object.freeze({
      to: objectPath.get(payload, 'to'),
      accountId: objectPath.get(payload, 'accountSid'),
      requestId: objectPath.get(payload, 'sid'),
      networkId: 1,
    });
  }
}

module.exports = TwilioTestMessage;
