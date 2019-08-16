/**
 * @flow
 * @relayHash e15db9e28cd47fb739bca334e40f6a9d
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
export type createUserSettingMutationVariables = {|
  input: UserSettingInput
|};
export type createUserSettingMutationResponse = {|
  +createUserSetting: ?{|
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
export type createUserSettingMutation = {|
  variables: createUserSettingMutationVariables,
  response: createUserSettingMutationResponse,
|};
*/


/*
mutation createUserSettingMutation(
  $input: UserSettingInput!
) {
  createUserSetting(input: $input) {
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
    "name": "input",
    "type": "UserSettingInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUserSetting",
    "storageKey": null,
    "args": [
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
    "name": "createUserSettingMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createUserSettingMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createUserSettingMutation",
    "id": null,
    "text": "mutation createUserSettingMutation(\n  $input: UserSettingInput!\n) {\n  createUserSetting(input: $input) {\n    id\n    name\n    accountKey\n    accountSecretKey\n    accountToken\n    apiEndpoint\n    fromNumber\n    segment\n    status\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e1d9c83a789cc7877d76864ff6c5bbf';
module.exports = node;
