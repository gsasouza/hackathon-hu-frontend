/**
 * @flow
 * @relayHash 3b2cfc57d73c2a2f413abd96eb0be1fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowRemoveInput = {
  articleId: string,
  clientMutationId?: ?string,
};
export type FollowRemoveMutationVariables = {|
  input: FollowRemoveInput
|};
export type FollowRemoveMutationResponse = {|
  +FollowRemove: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation FollowRemoveMutation(
  $input: FollowRemoveInput!
) {
  FollowRemove(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowRemoveInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "FollowRemove",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FollowRemoveInput!"
      }
    ],
    "concreteType": "FollowRemovePayload",
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
  "name": "FollowRemoveMutation",
  "id": null,
  "text": "mutation FollowRemoveMutation(\n  $input: FollowRemoveInput!\n) {\n  FollowRemove(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FollowRemoveMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowRemoveMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e87c3c803e7a4499ec4c43a0431b7733';
module.exports = node;
