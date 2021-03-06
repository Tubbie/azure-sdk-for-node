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
 * Collection of runs.
 */
class RunListResult extends Array {
  /**
   * Create a RunListResult.
   * @property {string} [nextLink] The URI that can be used to request the next
   * set of paged results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RunListResult
   *
   * @returns {object} metadata of RunListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunListResult',
      type: {
        name: 'Composite',
        className: 'RunListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RunElementType',
                  type: {
                    name: 'Composite',
                    className: 'Run'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RunListResult;
