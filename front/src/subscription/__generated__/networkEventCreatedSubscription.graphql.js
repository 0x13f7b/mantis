/**
 * @flow
 * @relayHash c4ab58d83d5096d2c34dc956aad9584a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type networkEventCreatedSubscriptionVariables = {||};
export type networkEventCreatedSubscriptionResponse = {|
  +networkEventCreated: {|
    +id: string,
    +regionType: number,
    +regionName: ?string,
    +regionDID: ?string,
    +eventType: ?number,
    +eventMicrotime: ?number,
    +network: ?{|
      +id: string,
      +name: ?string,
    |},
  |}
|};
export type networkEventCreatedSubscription = {|
  variables: networkEventCreatedSubscriptionVariables,
  response: networkEventCreatedSubscriptionResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "networkEventCreated",
    "storageKey": null,
    "args": null,
    "concreteType": "NetworkEvent",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "regionType",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "regionName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "regionDID",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventType",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventMicrotime",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "network",
        "storageKey": null,
        "args": null,
        "concreteType": "Network",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "networkEventCreatedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "networkEventCreatedSubscription",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "networkEventCreatedSubscription",
    "id": null,
    "text": "subscription networkEventCreatedSubscription {\n  networkEventCreated {\n    id\n    regionType\n    regionName\n    regionDID\n    eventType\n    eventMicrotime\n    network {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '611c45e024dd3da016ad5ac742bddf54';
module.exports = node;
