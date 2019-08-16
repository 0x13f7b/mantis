/**
 * @flow strict
 * @format
 */

import { requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type networkEventCreatedSubscriptionResponse from './__generated__/networkEventCreatedSubscription.graphql.js';

const subscription = graphql`
  subscription networkEventCreatedSubscription {
    networkEventCreated {
      id
      regionType
      regionName
      regionDID
      eventType
      eventMicrotime
      network {
        id
        name
      }
    }
  }
`;

export default (onNext: (response: networkEventCreatedSubscriptionResponse) => void) => {
  const subscriptionConfig = {
    subscription,
    variables: {},
    onNext: onNext,
    onError: error => console.log(`An error occured:`, error),
  };
  requestSubscription(RelayEnvironment, subscriptionConfig);
};
