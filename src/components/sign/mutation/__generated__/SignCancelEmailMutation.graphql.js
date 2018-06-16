/**
 * @flow
 * @relayHash 0f3fc4ac4799b8901fce6c956a91f71b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignFeedCancelInput = {
  email: string,
  clientMutationId?: ?string,
};
export type SignCancelEmailMutationVariables = {|
  input: SignFeedCancelInput
|};
export type SignCancelEmailMutationResponse = {|
  +SignFeedCancel: ?{|
    +email: ?string,
    +error: ?string,
  |}
|};
*/


/*
mutation SignCancelEmailMutation(
  $input: SignFeedCancelInput!
) {
  SignFeedCancel(input: $input) {
    email
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignFeedCancelInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "SignFeedCancel",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SignFeedCancelInput!"
      }
    ],
    "concreteType": "SignFeedCancelPayload",
    "plural": false,
    "selections": [
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
  "name": "SignCancelEmailMutation",
  "id": null,
  "text": "mutation SignCancelEmailMutation(\n  $input: SignFeedCancelInput!\n) {\n  SignFeedCancel(input: $input) {\n    email\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignCancelEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignCancelEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e27691ce987263cd5324944a700fde76';
module.exports = node;
