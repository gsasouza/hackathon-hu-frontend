/**
 * @flow
 * @relayHash af2aaea5f149edc0303214499516d4d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ActionList_query$ref = any;
export type ActionListRefetchQueryVariables = {|
  after?: ?string,
  before?: ?string,
  search?: ?string,
  first?: ?number,
  last?: ?number,
|};
export type ActionListRefetchQueryResponse = {|
  +$fragmentRefs: ActionList_query$ref
|};
*/


/*
query ActionListRefetchQuery(
  $after: String
  $before: String
  $search: String
  $first: Int
  $last: Int
) {
  ...ActionList_query_nvrZx
}

fragment ActionList_query_nvrZx on Query {
  actions(first: $first, last: $last, after: $after, before: $before, search: $search) {
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
        unit
        situation
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
  "name": "ActionListRefetchQuery",
  "id": null,
  "text": "query ActionListRefetchQuery(\n  $after: String\n  $before: String\n  $search: String\n  $first: Int\n  $last: Int\n) {\n  ...ActionList_query_nvrZx\n}\n\nfragment ActionList_query_nvrZx on Query {\n  actions(first: $first, last: $last, after: $after, before: $before, search: $search) {\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        unit\n        situation\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActionListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ActionList_query",
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
    "name": "ActionListRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "actions",
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
        "concreteType": "ActionConnection",
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
            "concreteType": "ActionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Action",
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
                    "name": "unit",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "situation",
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
        "name": "actions",
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
        "key": "ActionList_actions",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '523434a2cbca0ea6ed1b6cc46ece417e';
module.exports = node;
