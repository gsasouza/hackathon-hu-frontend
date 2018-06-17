/**
 * @flow
 * @relayHash 0d716145314c4dc31aab121895c17453
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ActionDetail_query$ref = any;
export type ActionDetailQueryVariables = {|
  id: string
|};
export type ActionDetailQueryResponse = {|
  +$fragmentRefs: ActionDetail_query$ref
|};
*/


/*
query ActionDetailQuery(
  $id: ID!
) {
  ...ActionDetail_query_1Bmzm5
}

fragment ActionDetail_query_1Bmzm5 on Query {
  action(id: $id) {
    title
    unit
    description
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ActionDetailQuery",
  "id": null,
  "text": "query ActionDetailQuery(\n  $id: ID!\n) {\n  ...ActionDetail_query_1Bmzm5\n}\n\nfragment ActionDetail_query_1Bmzm5 on Query {\n  action(id: $id) {\n    title\n    unit\n    description\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActionDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ActionDetail_query",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ActionDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "action",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Action",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "unit",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5e16eb12a76abf9ad80c42096011fa8';
module.exports = node;
