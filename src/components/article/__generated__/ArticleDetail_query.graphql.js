/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ArticleDetail_query$ref: FragmentReference;
export type ArticleDetail_query = {|
  +article: ?{|
    +title: ?string,
    +category: ?string,
  |},
  +likes: ?{|
    +count: ?number
  |},
  +follows: ?{|
    +count: ?number
  |},
  +likesFromMe: ?boolean,
  +followsFromMe: ?boolean,
  +$refType: ArticleDetail_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "article",
    "variableName": "id",
    "type": "ID"
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
  "kind": "Fragment",
  "name": "ArticleDetail_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }
  ],
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
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "likes",
      "storageKey": null,
      "args": v0,
      "concreteType": "LikeConnection",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "follows",
      "storageKey": null,
      "args": v2,
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
      "args": v0,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4efa08002a94f31bdb9ed6ab0e269320';
module.exports = node;
