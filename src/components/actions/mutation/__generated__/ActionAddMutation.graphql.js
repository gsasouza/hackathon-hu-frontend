/**
 * @flow
 * @relayHash 040532378c6c0afd9506ba598bd67c61
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActionAddInput = {
  title: string,
  description: string,
  unit: string,
  clientMutationId?: ?string,
};
export type ActionAddMutationVariables = {|
  input: ActionAddInput
|};
export type ActionAddMutationResponse = {|
  +ActionAdd: ?{|
    +action: ?{|
      +title: ?string,
      +description: ?string,
      +unit: ?string,
    |},
    +error: ?string,
  |}
|};
*/


/*
mutation ActionAddMutation(
  $input: ActionAddInput!
) {
  ActionAdd(input: $input) {
    action {
      title
      description
      unit
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
    "type": "ActionAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ActionAddInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
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
  "name": "ActionAddMutation",
  "id": null,
  "text": "mutation ActionAddMutation(\n  $input: ActionAddInput!\n) {\n  ActionAdd(input: $input) {\n    action {\n      title\n      description\n      unit\n      id\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActionAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ActionAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "ActionAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "action",
            "storageKey": null,
            "args": null,
            "concreteType": "Action",
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
    "name": "ActionAddMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ActionAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "ActionAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "action",
            "storageKey": null,
            "args": null,
            "concreteType": "Action",
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
(node/*: any*/).hash = '74eb86e71561644e6ff9823c9d9ecde1';
module.exports = node;
