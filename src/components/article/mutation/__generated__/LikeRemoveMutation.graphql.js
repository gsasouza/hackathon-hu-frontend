/**
 * @flow
 * @relayHash 385d80ff179e570a63ed859fde9b9800
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LikeRemoveInput = {
  articleId: string,
  clientMutationId?: ?string,
};
export type LikeRemoveMutationVariables = {|
  input: LikeRemoveInput
|};
export type LikeRemoveMutationResponse = {|
  +LikeRemove: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation LikeRemoveMutation(
  $input: LikeRemoveInput!
) {
  LikeRemove(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LikeRemoveInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "LikeRemove",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LikeRemoveInput!"
      }
    ],
    "concreteType": "LikeRemovePayload",
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
  "name": "LikeRemoveMutation",
  "id": null,
  "text": "mutation LikeRemoveMutation(\n  $input: LikeRemoveInput!\n) {\n  LikeRemove(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LikeRemoveMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LikeRemoveMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '74b567e28c6d597eb9d54abbcb8f5e1b';
module.exports = node;
