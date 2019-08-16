/**
 * @flow
 * @relayHash 3c1bde80636ca32d59adf5a8d6b0b278
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInput = {|
  companyName?: ?string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone?: ?string,
  city?: ?string,
  state?: ?string,
  country?: ?string,
  postalCode?: ?string,
  addressLine1?: ?string,
  addressLine2?: ?string,
  apiToken?: ?string,
|};
export type createUserMutationVariables = {|
  input: UserInput
|};
export type createUserMutationResponse = {|
  +createUser: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +email: ?string,
    +status: ?number,
    +apiToken: ?string,
  |}
|};
export type createUserMutation = {|
  variables: createUserMutationVariables,
  response: createUserMutationResponse,
|};
*/


/*
mutation createUserMutation(
  $input: UserInput!
) {
  createUser(input: $input) {
    id
    firstName
    lastName
    email
    status
    apiToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserInput!"
      }
    ],
    "concreteType": "User",
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
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lastName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
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
        "name": "apiToken",
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
    "name": "createUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createUserMutation",
    "id": null,
    "text": "mutation createUserMutation(\n  $input: UserInput!\n) {\n  createUser(input: $input) {\n    id\n    firstName\n    lastName\n    email\n    status\n    apiToken\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9f8b73f5ec2352eb242e3c8a8b362bb';
module.exports = node;
