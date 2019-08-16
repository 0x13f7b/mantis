/**
 * @format
 */

const sha1 = require('sha1');

class AbstractTestMessage {
  constructor(from, to, uuid) {
    this.from = from;
    this.to = to;
    this.eventUUID = uuid;
    this.messageText = sha1(uuid);
  }

  send() {
    throw new Error('You have to implement the method configure!');
  }

  configure() {
    throw new Error('You have to implement the method configure!');
  }
}

module.exports = AbstractTestMessage;
