/**
 * @flow
 * @relayHash ea69be64fdad7f41058e73b01840ec74
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterEmailInput = {
  name: string,
  university: string,
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type SignUpMutationVariables = {|
  input: RegisterEmailInput
|};
export type SignUpMutationResponse = {|
  +RegisterEmail: ?{|
    +token: ?string,
    +error: ?string,
  |}
|};
*/


/*
mutation SignUpMutation(
  $input: RegisterEmailInput!
) {
  RegisterEmail(input: $input) {
    token
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "RegisterEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterEmailInput!"
      }
    ],
    "concreteType": "RegisterEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SignUpMutation",
  "id": null,
  "text": "mutation SignUpMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    token\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e27ec1abd90d70a216a8a97cf28a7b1';
module.exports = node;
