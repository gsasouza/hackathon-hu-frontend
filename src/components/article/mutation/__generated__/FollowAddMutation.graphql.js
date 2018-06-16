/**
 * @flow
 * @relayHash f122cb07eedde359c1232c59141b2ee3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowAddInput = {
  articleId: string,
  clientMutationId?: ?string,
};
export type FollowAddMutationVariables = {|
  input: FollowAddInput
|};
export type FollowAddMutationResponse = {|
  +FollowAdd: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation FollowAddMutation(
  $input: FollowAddInput!
) {
  FollowAdd(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "FollowAdd",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FollowAddInput!"
      }
    ],
    "concreteType": "FollowAddPayload",
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
  "name": "FollowAddMutation",
  "id": null,
  "text": "mutation FollowAddMutation(\n  $input: FollowAddInput!\n) {\n  FollowAdd(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FollowAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowAddMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '51fdf97387f61c86f04dd3ef09a930fc';
module.exports = node;
