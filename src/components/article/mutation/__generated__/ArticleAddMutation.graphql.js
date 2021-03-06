/**
 * @flow
 * @relayHash d0ae0b4b39b1c3ebe308855dcee9e48a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArticleAddInput = {
  title: string,
  description: string,
  category: string,
  tags?: ?string,
  clientMutationId?: ?string,
};
export type ArticleAddMutationVariables = {|
  input: ArticleAddInput
|};
export type ArticleAddMutationResponse = {|
  +ArticleAdd: ?{|
    +article: ?{|
      +title: ?string,
      +category: ?string,
    |},
    +error: ?string,
  |}
|};
*/


/*
mutation ArticleAddMutation(
  $input: ArticleAddInput!
) {
  ArticleAdd(input: $input) {
    article {
      title
      category
      id
    }
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ArticleAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ArticleAddInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ArticleAddMutation",
  "id": null,
  "text": "mutation ArticleAddMutation(\n  $input: ArticleAddInput!\n) {\n  ArticleAdd(input: $input) {\n    article {\n      title\n      category\n      id\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ArticleAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "ArticleAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "article",
            "storageKey": null,
            "args": null,
            "concreteType": "Article",
            "plural": false,
            "selections": [
              v2,
              v3
            ]
          },
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleAddMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ArticleAdd",
        "storageKey": null,
        "args": v1,
        "concreteType": "ArticleAddPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "article",
            "storageKey": null,
            "args": null,
            "concreteType": "Article",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75b220b4154610247314e0c2d238c1c4';
module.exports = node;
