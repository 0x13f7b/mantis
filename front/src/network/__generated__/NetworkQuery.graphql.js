/**
 * @flow
 * @relayHash 9ea0e6537a6b22fb2ce605c5feaf60c4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NetworkQueryVariables = {||};
export type NetworkQueryResponse = {|
  +networks: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +overallScore: ?number,
    +availabilityScore: ?number,
    +averageOperationTime: ?number,
    +failures: ?number,
    +lowestBandwidth: ?number,
    +averageBandwidth: ?number,
    +highestBandwidth: ?number,
    +priority: ?number,
    +status: ?number,
    +events: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +updatedAt: ?any,
  |}>
|};
export type NetworkQuery = {|
  variables: NetworkQueryVariables,
  response: NetworkQueryResponse,
|};
*/


/*
query NetworkQuery {
  networks {
    id
    name
    overallScore
    availabilityScore
    averageOperationTime
    failures
    lowestBandwidth
    averageBandwidth
    highestBandwidth
    priority
    status
    events {
      id
    }
    updatedAt
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
    "name": "networks",
    "storageKey": null,
    "args": null,
    "concreteType": "Network",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lowestBandwidth",
        "args": null,
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "overallScore",
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "averageBandwidth",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "highestBandwidth",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "events",
        "storageKey": null,
        "args": null,
        "concreteType": "NetworkEvent",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
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
    "name": "NetworkQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NetworkQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NetworkQuery",
    "id": null,
    "text": "query NetworkQuery {\n  networks {\n    id\n    name\n    overallScore\n    availabilityScore\n    averageOperationTime\n    failures\n    lowestBandwidth\n    averageBandwidth\n    highestBandwidth\n    priority\n    status\n    events {\n      id\n    }\n    updatedAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4b5e3d30aaae8298bf66e316ca92f32';
module.exports = node;
