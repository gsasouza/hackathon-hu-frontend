/**
 * @flow
 * @relayHash 205d3b463cc2913d83a6e021e3602a1e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleDetail_query$ref = any;
export type ArticleDetailQueryVariables = {|
  id: string
|};
export type ArticleDetailQueryResponse = {|
  +$fragmentRefs: ArticleDetail_query$ref
|};
*/


/*
query ArticleDetailQuery(
  $id: ID!
) {
  ...ArticleDetail_query_1Bmzm5
}

fragment ArticleDetail_query_1Bmzm5 on Query {
  article(id: $id) {
    title
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
  "name": "ArticleDetailQuery",
  "id": null,
  "text": "query ArticleDetailQuery(\n  $id: ID!\n) {\n  ...ArticleDetail_query_1Bmzm5\n}\n\nfragment ArticleDetail_query_1Bmzm5 on Query {\n  article(id: $id) {\n    title\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticleDetail_query",
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
    "name": "ArticleDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "article",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Article",
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
(node/*: any*/).hash = '7479174ff673c952b62867447a514569';
module.exports = node;
