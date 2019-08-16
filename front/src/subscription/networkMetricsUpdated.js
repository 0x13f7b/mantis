/**
 * @flow strict
 * @format
 */

import { requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type networkMetricsUpdatedSubscriptionResponse from './__generated__/networkMetricsUpdatedSubscription.graphql.js';

const subscription = graphql`
  subscription networkMetricsUpdatedSubscription {
    networkMetricsUpdated {
      id
      name
      availabilityScore
      averageOperationTime
      failures
      priority
      status
      createdAt
      updatedAt
    }
  }
`;

export default (onNext: (response: networkMetricsUpdatedSubscriptionResponse) => void) => {
  const subscriptionConfig = {
    subscription,
    variables: {},
    onNext: onNext,
    onError: error => console.log(`An error occured:`, error),
  };
  requestSubscription(RelayEnvironment, subscriptionConfig);
};
