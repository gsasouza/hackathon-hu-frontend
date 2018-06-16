/**
 * @flow
 * @relayHash 1ef845583501f2fa96920cb2dd8dab66
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
  likes {
    count
  }
  follows {
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
    "kind": "ScalarField",
    "alias": null,
    "name": "count",
    "args": null,
    "storageKey": null
  }
],
v2 = [
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
  "text": "query ArticleDetailQuery(\n  $id: ID!\n) {\n  ...ArticleDetail_query_1Bmzm5\n}\n\nfragment ArticleDetail_query_1Bmzm5 on Query {\n  article(id: $id) {\n    title\n    id\n  }\n  likes {\n    count\n  }\n  follows {\n    count\n  }\n  likesFromMe(article: $id)\n  followsFromMe(article: $id)\n}\n",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likes",
        "storageKey": null,
        "args": null,
        "concreteType": "LikeConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "follows",
        "storageKey": null,
        "args": null,
        "concreteType": "FollowConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "likesFromMe",
        "args": v2,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "followsFromMe",
        "args": v2,
        "storageKey": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7479174ff673c952b62867447a514569';
module.exports = node;
