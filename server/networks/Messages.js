/**
 * @format
 */

require('dotenv').config();
const NexmoSDK = require('nexmo');
const BandwidthSDK = require('node-bandwidth');
const TwilioSDK = require('twilio');

class Nexmo {
  constructor() {
    this.constants = Object.freeze({
      FROM: '12018577804',
    });
    this.client = new NexmoSDK(
      {
        apiKey: '447ea053',
        apiSecret: '2jacCwODdl3Cw4FA',
      },
      {
        debug: false,
      }
    );
  }

  send(to, message, doneCallback) {
    this.client.message.sendSms(this.constants.FROM, to, message, {}, (err, response) => {
      return doneCallback(response);
    });
  }
}

class Twilio {
  constructor() {
    this.constants = Object.freeze({
      FROM: '+18189183936',
    });
    const accountSid = 'ACd78d36ee359e7bc773c3b567a75f07ba';
    const authToken = 'ddb85150b2e4fa5eab66c41aafce3112';
    this.client = new TwilioSDK(accountSid, authToken);
  }

  send(to, message, doneCallback) {
    this.client.messages
      .create({
        body: message,
        to: to,
        from: this.constants.FROM,
        provideFeeedback: true,
      })
      .then(doneCallback);
  }
}

class Bandwidth {
  constructor() {
    this.constants = Object.freeze({
      FROM: '+18183222520',
    });
    this.client = new BandwidthSDK({
      userId: 'u-3wehcb3eyvlfsdbrekiapri',
      apiToken: 't-2dfesb273fd7x4swnaxvh4a',
      apiSecret: 'zvdgrot6bzbdxfbgrbqsghtap6bitbh4nl4myoy',
    });
  }

  async send(to, message, doneCallback) {
    this.client.Message.send({
      from: this.constants.FROM,
      to: to,
      text: message,
    }).then(doneCallback);
  }
}

module.exports = {
  Twilio,
  Nexmo,
  Bandwidth,
};
