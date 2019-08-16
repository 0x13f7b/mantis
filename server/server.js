/**
 * @format
 * @type {createApplication}
 */
require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server-express');
const NetworkEvents = require('./constants/NetworkEvents');
const http = require('http');
const twilio = require('twilio');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const microtime = require('microtime');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const EntRequestLog = require('./ent/EntRequestLog');
const NewtorkTypes = require('./constants/NetworkTypes.js');
const { createEventWithOperationTime } = require('./utils/networkEvent');
const objectPath = require('object-path');
const app = express();
const callbackLoggerFieldsMapping = {
  Twilio: payload =>
    Object.freeze({
      regionDID: objectPath.get(payload, 'body.To'),
      accountId: objectPath.get(payload, 'body.AccountSid'),
      requestId: objectPath.get(payload, 'body.MessageSid'),
      requestBody: objectPath.get(payload, 'body'),
    }),
  Nexmo: payload =>
    Object.freeze({
      regionDID: objectPath.get(payload, 'query.msisdn'),
      accountId: objectPath.get(payload, 'query.messageId'),
      requestId: objectPath.get(payload, 'query.messageId'),
      requestBody: objectPath.get(payload, 'query'),
    }),
  Bandwidth: payload =>
    Object.freeze({
      regionDID: objectPath.get(payload, 'body.to'),
      accountId: objectPath.get(payload, 'body.messageId'),
      requestId: objectPath.get(payload, 'body.messageId'),
      requestBody: objectPath.get(payload, 'body'),
    }),
};

app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.all('/callback/:networkId/:uuid', (req, res) => {
  const { networkId, uuid } = req.params;
  let requestLoggerFieldMapping = null;
  switch (parseInt(networkId)) {
    case 1:
      requestLoggerFieldMapping = callbackLoggerFieldsMapping.Twilio(req);
      break;
    case 2:
      requestLoggerFieldMapping = callbackLoggerFieldsMapping.Nexmo(req);
      break;
    case 3:
      requestLoggerFieldMapping = callbackLoggerFieldsMapping.Bandwidth(eq);
      break;
  }
  createEventWithOperationTime(
    0,
    requestLoggerFieldMapping.regionDID,
    requestLoggerFieldMapping.accountId,
    requestLoggerFieldMapping.messageId,
    requestLoggerFieldMapping.requestBody,
    uuid,
    microtime.nowDouble(),
    NetworkEvents.EVENT_UNIX_TIME_STATUS_CALLBACK,
    networkId
  );
  const response = new MessagingResponse();
  res.set('Content-Type', 'text/xml');
  res.send(response.toString());
});

app.post('/messages/send', async (req, res) => {
  const Selector = require('./networks/Selector');
  const selector = new Selector();
  const Messages = require('./networks/Messages');
  const { to, message } = req.body;
  const selectedNetwork = await selector.selectNetwork();
  const selectedNetworkInstance = new Messages[selectedNetwork.name]();
  selectedNetworkInstance.send(to, message, result => {
    res.set('Content-Type', 'application/json');
    res.send({
      status: 'OK',
      selectedNetwork: selectedNetwork,
      selectedNetworkResponse: result,
    });
  });
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});
server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(process.env.APP_PORT, () => {
  console.log(`Server ready at http://localhost:${process.env.APP_PORT}${server.graphqlPath}`);
  console.log(
    `Subscriptions ready at ws://localhost:${process.env.APP_PORT}${server.subscriptionsPath}`
  );
});
