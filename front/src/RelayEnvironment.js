/**
 * @flow strict
 * @format
 */
import { Network, Environment, RecordSource, Store } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const fetchQuery = (operation, variables) => {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer a6322a79b1dd793314e7d5d6a73b72586c2ac642',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json && json.errors) {
        throw new Error(json.errors[0]);
      }
      return json;
    });
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;

  const subscriptionClient = new SubscriptionClient('ws://localhost:4000/graphql', {
    reconnect: true,
  });
  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
};

const network = Network.create(fetchQuery, setupSubscription);

const RelayEnvironment = new Environment({
  network: network,
  store: new Store(new RecordSource()),
});

export default RelayEnvironment;
