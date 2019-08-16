/**
 * @flow
 * @relayHash 6ee2ddd056da63ece7bdad36908f084e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NetworkEventTimelineQueryVariables = {|
  eventUUID: string
|};
export type NetworkEventTimelineQueryResponse = {|
  +networkEventTimeline: ?$ReadOnlyArray<?{|
    +id: string,
    +regionDID: ?string,
    +requestId: ?string,
    +operationTime: ?number,
    +eventType: ?number,
    +eventUUID: ?string,
    +eventMicrotime: ?number,
    +score: ?number,
    +status: ?number,
    +requestBody: ?any,
    +createdAt: ?any,
    +network: ?{|
      +id: string,
      +name: ?string,
      +status: ?number,
    |},
  |}>
|};
export type NetworkEventTimelineQuery = {|
  variables: NetworkEventTimelineQueryVariables,
  response: NetworkEventTimelineQueryResponse,
|};
*/


/*
query NetworkEventTimelineQuery(
  $eventUUID: String!
) {
  networkEventTimeline(eventUUID: $eventUUID) {
    id
    regionDID
    requestId
    operationTime
    eventType
    eventUUID
    eventMicrotime
    score
    status
    requestBody
    createdAt
    network {
      id
      name
      status
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "eventUUID",
    "type": "String!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "networkEventTimeline",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "eventUUID",
        "variableName": "eventUUID",
        "type": "String!"
      }
    ],
    "concreteType": "NetworkEvent",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventMicrotime",
        "args": null,
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "requestId",
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
        "name": "eventType",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventUUID",
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
        "name": "score",
        "args": null,
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "requestBody",
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
          },
          (v2/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NetworkEventTimelineQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NetworkEventTimelineQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NetworkEventTimelineQuery",
    "id": null,
    "text": "query NetworkEventTimelineQuery(\n  $eventUUID: String!\n) {\n  networkEventTimeline(eventUUID: $eventUUID) {\n    id\n    regionDID\n    requestId\n    operationTime\n    eventType\n    eventUUID\n    eventMicrotime\n    score\n    status\n    requestBody\n    createdAt\n    network {\n      id\n      name\n      status\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ac6c4af4b0c44321c90196cb3d1736b2';
module.exports = node;
