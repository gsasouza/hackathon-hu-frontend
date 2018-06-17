/**
 * @flow
 * @relayHash 564ed8bd11767d50f97f6f545bb419ba
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
    category
    id
  }
  likes(article: $id) {
    count
  }
  follows(article: $id) {
    count
  }
  likesFromMe(article: $id)
  followsFromMe(article: $id)
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
],
v1 = [
  {
    "kind": "Variable",
    "name": "article",
    "variableName": "id",
    "type": "ID"
  }
],
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "count",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "article",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticleDetailQuery",
  "id": null,
  "text": "query ArticleDetailQuery(\n  $id: ID!\n) {\n  ...ArticleDetail_query_1Bmzm5\n}\n\nfragment ArticleDetail_query_1Bmzm5 on Query {\n  article(id: $id) {\n    title\n    category\n    id\n  }\n  likes(article: $id) {\n    count\n  }\n  follows(article: $id) {\n    count\n  }\n  likesFromMe(article: $id)\n  followsFromMe(article: $id)\n}\n",
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
            "name": "category",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likes",
        "storageKey": null,
        "args": v1,
        "concreteType": "LikeConnection",
        "plural": false,
        "selections": v2
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "follows",
        "storageKey": null,
        "args": v3,
        "concreteType": "FollowConnection",
        "plural": false,
        "selections": v2
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "likesFromMe",
        "args": v3,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "followsFromMe",
        "args": v1,
        "storageKey": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7479174ff673c952b62867447a514569';
module.exports = node;
