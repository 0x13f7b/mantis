/**
 * @flow
 * @relayHash 2637d1d5d8186b3a0c8198c662e5a13b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NetworkEventsQueryVariables = {|
  networkId: number
|};
export type NetworkEventsQueryResponse = {|
  +networkEvents: ?$ReadOnlyArray<?{|
    +id: string,
    +network: ?{|
      +id: string,
      +name: ?string,
    |},
    +regionName: ?string,
    +regionType: number,
    +regionDID: ?string,
    +requestBody: ?any,
    +eventUUID: ?string,
    +eventMicrotime: ?number,
    +eventType: ?number,
    +operationTime: ?number,
    +score: ?number,
    +accountId: ?string,
    +status: ?number,
  |}>
|};
export type NetworkEventsQuery = {|
  variables: NetworkEventsQueryVariables,
  response: NetworkEventsQueryResponse,
|};
*/


/*
query NetworkEventsQuery(
  $networkId: Int!
) {
  networkEvents(networkId: $networkId) {
    id
    network {
      id
      name
    }
    regionName
    regionType
    regionDID
    requestBody
    eventUUID
    eventMicrotime
    eventType
    operationTime
    score
    accountId
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "networkId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "networkEvents",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "networkId",
        "variableName": "networkId",
        "type": "Int!"
      }
    ],
    "concreteType": "NetworkEvent",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventUUID",
        "args": null,
        "storageKey": null
      },
      (v1/*: any*/),
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
        "name": "regionType",
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
        "name": "requestBody",
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventMicrotime",
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
        "name": "operationTime",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "score",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
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
    "name": "NetworkEventsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NetworkEventsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NetworkEventsQuery",
    "id": null,
    "text": "query NetworkEventsQuery(\n  $networkId: Int!\n) {\n  networkEvents(networkId: $networkId) {\n    id\n    network {\n      id\n      name\n    }\n    regionName\n    regionType\n    regionDID\n    requestBody\n    eventUUID\n    eventMicrotime\n    eventType\n    operationTime\n    score\n    accountId\n    status\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e4cd586128ca6844578050111fa7c380';
module.exports = node;
