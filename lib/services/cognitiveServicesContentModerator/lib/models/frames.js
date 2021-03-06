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
 * The response for a Get Frames request.
 *
 */
class Frames {
  /**
   * Create a Frames.
   * @property {string} [reviewId] Id of the review.
   * @property {array} [videoFrames]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Frames
   *
   * @returns {object} metadata of Frames
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Frames',
      type: {
        name: 'Composite',
        className: 'Frames',
        modelProperties: {
          reviewId: {
            required: false,
            serializedName: 'ReviewId',
            type: {
              name: 'String'
            }
          },
          videoFrames: {
            required: false,
            serializedName: 'VideoFrames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FrameElementType',
                  type: {
                    name: 'Composite',
                    className: 'Frame'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Frames;
