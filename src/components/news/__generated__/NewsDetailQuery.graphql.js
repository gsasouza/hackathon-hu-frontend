/**
 * @flow
 * @relayHash e633d302b1c8698cd110131568b1eebe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsDetail_query$ref = any;
export type NewsDetailQueryVariables = {|
  id: string
|};
export type NewsDetailQueryResponse = {|
  +$fragmentRefs: NewsDetail_query$ref
|};
*/


/*
query NewsDetailQuery(
  $id: ID!
) {
  ...NewsDetail_query_1Bmzm5
}

fragment NewsDetail_query_1Bmzm5 on Query {
  new(id: $id) {
    id
    title
    abstract
    tag
    link
    time
    date
    image
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
  "name": "NewsDetailQuery",
  "id": null,
  "text": "query NewsDetailQuery(\n  $id: ID!\n) {\n  ...NewsDetail_query_1Bmzm5\n}\n\nfragment NewsDetail_query_1Bmzm5 on Query {\n  new(id: $id) {\n    id\n    title\n    abstract\n    tag\n    link\n    time\n    date\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewsDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NewsDetail_query",
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
    "name": "NewsDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "new",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "News",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "abstract",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "tag",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "link",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "time",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
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
(node/*: any*/).hash = 'f64c1b990313c96eacc18419f565011c';
module.exports = node;
