/**
 * @flow
 * @relayHash 1573f4ffff8a4b55999d092abd8697bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignFeedCancelCodeInput = {
  email: string,
  clientMutationId?: ?string,
};
export type SignCancelCodeMutationVariables = {|
  input: SignFeedCancelCodeInput
|};
export type SignCancelCodeMutationResponse = {|
  +SignFeedCancelCode: ?{|
    +error: ?string
  |}
|};
*/


/*
mutation SignCancelCodeMutation(
  $input: SignFeedCancelCodeInput!
) {
  SignFeedCancelCode(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignFeedCancelCodeInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SignFeedCancelCode",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SignFeedCancelCodeInput!"
      }
    ],
    "concreteType": "SignFeedCancelCodePayload",
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
  "name": "SignCancelCodeMutation",
  "id": null,
  "text": "mutation SignCancelCodeMutation(\n  $input: SignFeedCancelCodeInput!\n) {\n  SignFeedCancelCode(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignCancelCodeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignCancelCodeMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '954596ac68601bcf144abe9796c0c629';
module.exports = node;
