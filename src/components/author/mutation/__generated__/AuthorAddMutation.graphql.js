/**
 * @flow
 * @relayHash 7bf33e6d009adc189330fdffd13145ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthorAddInput = {
  name: string,
  email: string,
  unit: string,
  clientMutationId?: ?string,
};
export type AuthorAddMutationVariables = {|
  input: AuthorAddInput
|};
export type AuthorAddMutationResponse = {|
  +AuthorAdd: ?{|
    +article: ?{|
      +name: ?string,
      +unit: ?string,
      +email: ?string,
    |},
    +error: ?string,
  |}
|};
*/


/*
mutation AuthorAddMutation(
  $input: AuthorAddInput!
) {
  AuthorAdd(input: $input) {
    article {
      name
      unit
      email
      id
    }
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthorAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AuthorAddInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AuthorAddMutation",
  "id": null,
  "text": "mutation AuthorAddMutation(\n  $input: AuthorAddInput!\n) {\n  AuthorAdd(input: $input) {\n    article {\n      name\n      unit\n      email\n      id\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthorAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "AuthorAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "AuthorAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "article",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4
            ]
          },
          v5
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthorAddMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "AuthorAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "AuthorAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "article",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ad2c690a2757e01f450e1435133b9c29';
module.exports = node;
