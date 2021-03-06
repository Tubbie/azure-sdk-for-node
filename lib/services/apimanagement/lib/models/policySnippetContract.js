/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Policy snippet.
 *
 */
class PolicySnippetContract {
  /**
   * Create a PolicySnippetContract.
   * @property {string} [name] Snippet name.
   * @property {string} [content] Snippet content.
   * @property {string} [toolTip] Snippet toolTip.
   * @property {number} [scope] Binary OR value of the Snippet scope.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PolicySnippetContract
   *
   * @returns {object} metadata of PolicySnippetContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicySnippetContract',
      type: {
        name: 'Composite',
        className: 'PolicySnippetContract',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          content: {
            required: false,
            readOnly: true,
            serializedName: 'content',
            type: {
              name: 'String'
            }
          },
          toolTip: {
            required: false,
            readOnly: true,
            serializedName: 'toolTip',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            readOnly: true,
            serializedName: 'scope',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = PolicySnippetContract;
