/**
 * @flow
 * @relayHash 682a449c39a24d1ce5170b27daae4250
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserSettingEditQueryVariables = {|
  id?: ?number
|};
export type UserSettingEditQueryResponse = {|
  +userSetting: ?{|
    +id: string,
    +name: string,
    +networkType: number,
    +accountKey: string,
    +accountToken: ?string,
    +accountSecretKey: ?string,
    +apiEndpoint: string,
    +fromNumber: string,
    +segment: ?string,
    +status: ?number,
    +extra: ?any,
  |}
|};
export type UserSettingEditQuery = {|
  variables: UserSettingEditQueryVariables,
  response: UserSettingEditQueryResponse,
|};
*/


/*
query UserSettingEditQuery(
  $id: Int
) {
  userSetting(id: $id) {
    id
    name
    networkType
    accountKey
    accountToken
    accountSecretKey
    apiEndpoint
    fromNumber
    segment
    status
    extra
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userSetting",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "Int"
      }
    ],
    "concreteType": "UserSetting",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountSecretKey",
        "args": null,
        "storageKey": null
      },
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
        "name": "networkType",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountKey",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountToken",
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
        "name": "apiEndpoint",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "fromNumber",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "segment",
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
        "name": "extra",
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
    "name": "UserSettingEditQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserSettingEditQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserSettingEditQuery",
    "id": null,
    "text": "query UserSettingEditQuery(\n  $id: Int\n) {\n  userSetting(id: $id) {\n    id\n    name\n    networkType\n    accountKey\n    accountToken\n    accountSecretKey\n    apiEndpoint\n    fromNumber\n    segment\n    status\n    extra\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb8e2109d36dc2ba05a9fcb56f03292c';
module.exports = node;
