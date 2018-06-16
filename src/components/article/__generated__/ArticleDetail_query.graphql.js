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
    +title: ?string
  |},
  +$refType: ArticleDetail_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22dc96002f3dc9c8c4a66adebe13aa63';
module.exports = node;
