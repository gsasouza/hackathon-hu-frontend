/**
 * @flow
 * @relayHash dd6a27f8a9eae331e321427b7670a5da
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AuthorList_query$ref = any;
export type AuthorListRefetchQueryVariables = {|
  after?: ?string,
  before?: ?string,
  search?: ?string,
  first?: ?number,
  last?: ?number,
|};
export type AuthorListRefetchQueryResponse = {|
  +$fragmentRefs: AuthorList_query$ref
|};
*/


/*
query AuthorListRefetchQuery(
  $after: String
  $before: String
  $search: String
  $first: Int
  $last: Int
) {
  ...AuthorList_query_nvrZx
}

fragment AuthorList_query_nvrZx on Query {
  authors(first: $first, last: $last, after: $after, before: $before, search: $search) {
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
        name
        email
        unit
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
  "name": "AuthorListRefetchQuery",
  "id": null,
  "text": "query AuthorListRefetchQuery(\n  $after: String\n  $before: String\n  $search: String\n  $first: Int\n  $last: Int\n) {\n  ...AuthorList_query_nvrZx\n}\n\nfragment AuthorList_query_nvrZx on Query {\n  authors(first: $first, last: $last, after: $after, before: $before, search: $search) {\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        name\n        email\n        unit\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthorListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AuthorList_query",
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
    "name": "AuthorListRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "authors",
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
        "concreteType": "AuthorConnection",
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
            "concreteType": "AuthorEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Author",
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
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
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
                    "name": "unit",
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
        "name": "authors",
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
        "key": "AuthorList_authors",
        "filters": [
          "search"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb233a99cc6962e28abbef65bc65b92e';
module.exports = node;
