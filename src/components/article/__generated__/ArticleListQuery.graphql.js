/**
 * @flow
 * @relayHash de546e8cf779fd0c006c6b55feb743aa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleList_query$ref = any;
export type ArticleListQueryVariables = {|
  after?: ?string,
  before?: ?string,
  search?: ?string,
  first?: ?number,
  last?: ?number,
|};
export type ArticleListQueryResponse = {|
  +$fragmentRefs: ArticleList_query$ref
|};
*/


/*
query ArticleListQuery(
  $after: String
  $before: String
  $search: String
  $first: Int
  $last: Int
) {
  ...ArticleList_query_nvrZx
}

fragment ArticleList_query_nvrZx on Query {
  articles(first: $first, last: $last, after: $after, before: $before, search: $search) {
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        title
        url
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticleListQuery",
  "id": null,
  "text": "query ArticleListQuery(\n  $after: String\n  $before: String\n  $search: String\n  $first: Int\n  $last: Int\n) {\n  ...ArticleList_query_nvrZx\n}\n\nfragment ArticleList_query_nvrZx on Query {\n  articles(first: $first, last: $last, after: $after, before: $before, search: $search) {\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        url\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticleList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "articles",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "String"
          }
        ],
        "concreteType": "ArticleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Article",
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
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "articles",
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "String"
          }
        ],
        "handle": "connection",
        "key": "ArticleList_articles",
        "filters": [
          "search"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe91d6877d1e9cde3ff792acbd59f5ac';
module.exports = node;
