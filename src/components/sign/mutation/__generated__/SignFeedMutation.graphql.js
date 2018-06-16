/**
 * @flow
 * @relayHash 32f0a2ea37ed9d0dacf60226642faf47
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignFeedInput = {
  email: string,
  clientMutationId?: ?string,
};
export type SignFeedMutationVariables = {|
  input: SignFeedInput
|};
export type SignFeedMutationResponse = {|
  +SignFeed: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation SignFeedMutation(
  $input: SignFeedInput!
) {
  SignFeed(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignFeedInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SignFeed",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SignFeedInput!"
      }
    ],
    "concreteType": "SignFeedPayload",
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
  "name": "SignFeedMutation",
  "id": null,
  "text": "mutation SignFeedMutation(\n  $input: SignFeedInput!\n) {\n  SignFeed(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignFeedMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignFeedMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0280a1384b9b74f0c785fa22882a6762';
module.exports = node;
