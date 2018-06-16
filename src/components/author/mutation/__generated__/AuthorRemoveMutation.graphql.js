/**
 * @flow
 * @relayHash a81891b0781cf732a4e21fbf081ee1c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthorRemoveInput = {
  id: string,
  clientMutationId?: ?string,
};
export type AuthorRemoveMutationVariables = {|
  input: AuthorRemoveInput
|};
export type AuthorRemoveMutationResponse = {|
  +AuthorRemove: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation AuthorRemoveMutation(
  $input: AuthorRemoveInput!
) {
  AuthorRemove(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthorRemoveInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "AuthorRemove",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AuthorRemoveInput!"
      }
    ],
    "concreteType": "AuthorRemovePayload",
    "plural": false,
    "selections": [
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
  "name": "AuthorRemoveMutation",
  "id": null,
  "text": "mutation AuthorRemoveMutation(\n  $input: AuthorRemoveInput!\n) {\n  AuthorRemove(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthorRemoveMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthorRemoveMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0cc200a1d410bdee442e324d2d0c805c';
module.exports = node;
