/**
 * @flow
 * @relayHash 89c84ba9e8d43cb8d787c7b705754606
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type networkMetricsUpdatedSubscriptionVariables = {||};
export type networkMetricsUpdatedSubscriptionResponse = {|
  +networkMetricsUpdated: {|
    +id: string,
    +name: ?string,
    +availabilityScore: ?number,
    +averageOperationTime: ?number,
    +failures: ?number,
    +priority: ?number,
    +status: ?number,
    +createdAt: ?any,
    +updatedAt: ?any,
  |}
|};
export type networkMetricsUpdatedSubscription = {|
  variables: networkMetricsUpdatedSubscriptionVariables,
  response: networkMetricsUpdatedSubscriptionResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "networkMetricsUpdated",
    "storageKey": null,
    "args": null,
    "concreteType": "Network",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "availabilityScore",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "averageOperationTime",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "failures",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "priority",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "networkMetricsUpdatedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "networkMetricsUpdatedSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "networkMetricsUpdatedSubscription",
    "id": null,
    "text": "subscription networkMetricsUpdatedSubscription {\n  networkMetricsUpdated {\n    id\n    name\n    availabilityScore\n    averageOperationTime\n    failures\n    priority\n    status\n    createdAt\n    updatedAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '731a41eeee2729df0e24320c18ac4cf3';
module.exports = node;
