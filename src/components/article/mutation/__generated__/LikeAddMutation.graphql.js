/**
 * @flow
 * @relayHash eda108704e410ece1f5fa82c4da19415
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LikeAddInput = {
  articleId: string,
  clientMutationId?: ?string,
};
export type LikeAddMutationVariables = {|
  input: LikeAddInput
|};
export type LikeAddMutationResponse = {|
  +LikeAdd: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation LikeAddMutation(
  $input: LikeAddInput!
) {
  LikeAdd(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LikeAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "LikeAdd",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LikeAddInput!"
      }
    ],
    "concreteType": "LikeAddPayload",
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
  "name": "LikeAddMutation",
  "id": null,
  "text": "mutation LikeAddMutation(\n  $input: LikeAddInput!\n) {\n  LikeAdd(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LikeAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LikeAddMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5a1009a6617bc961b1aa94e09dd6f3a';
module.exports = node;
