/**
 * @flow
 * @relayHash f1819d9b6141716ac646d47842d4cc83
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserSettingInput = {|
  name: string,
  userId: number,
  networkType: number,
  accountKey: string,
  accountSecretKey?: ?string,
  accountToken?: ?string,
  apiEndpoint: string,
  fromNumber: string,
  segment?: ?string,
  extra?: ?any,
  status?: ?number,
|};
export type updateUserSettingMutationVariables = {|
  id: string,
  input: UserSettingInput,
|};
export type updateUserSettingMutationResponse = {|
  +updateUserSetting: ?{|
    +id: string,
    +name: string,
    +accountKey: string,
    +accountSecretKey: ?string,
    +accountToken: ?string,
    +apiEndpoint: string,
    +fromNumber: string,
    +segment: ?string,
    +status: ?number,
  |}
|};
export type updateUserSettingMutation = {|
  variables: updateUserSettingMutationVariables,
  response: updateUserSettingMutationResponse,
|};
*/


/*
mutation updateUserSettingMutation(
  $id: ID!
  $input: UserSettingInput!
) {
  updateUserSetting(id: $id, input: $input) {
    id
    name
    accountKey
    accountSecretKey
    accountToken
    apiEndpoint
    fromNumber
    segment
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserSettingInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUserSetting",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserSettingInput!"
      }
    ],
    "concreteType": "UserSetting",
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
        "name": "accountKey",
        "args": null,
        "storageKey": null
      },
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
        "name": "accountToken",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "updateUserSettingMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateUserSettingMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateUserSettingMutation",
    "id": null,
    "text": "mutation updateUserSettingMutation(\n  $id: ID!\n  $input: UserSettingInput!\n) {\n  updateUserSetting(id: $id, input: $input) {\n    id\n    name\n    accountKey\n    accountSecretKey\n    accountToken\n    apiEndpoint\n    fromNumber\n    segment\n    status\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce5152372bfcc35175857b04608433b3';
module.exports = node;
