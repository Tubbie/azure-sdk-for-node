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
 * The authorization properties for accessing the source code repository.
 *
 */
class AuthInfoUpdateParameters {
  /**
   * Create a AuthInfoUpdateParameters.
   * @member {string} [tokenType] The type of Auth token. Possible values
   * include: 'PAT', 'OAuth'
   * @member {string} [token] The access token used to access the source
   * control provider.
   * @member {string} [refreshToken] The refresh token used to refresh the
   * access token.
   * @member {string} [scope] The scope of the access token.
   * @member {number} [expiresIn] Time in seconds that the token remains valid
   */
  constructor() {
  }

  /**
   * Defines the metadata of AuthInfoUpdateParameters
   *
   * @returns {object} metadata of AuthInfoUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthInfoUpdateParameters',
      type: {
        name: 'Composite',
        className: 'AuthInfoUpdateParameters',
        modelProperties: {
          tokenType: {
            required: false,
            serializedName: 'tokenType',
            type: {
              name: 'String'
            }
          },
          token: {
            required: false,
            serializedName: 'token',
            type: {
              name: 'String'
            }
          },
          refreshToken: {
            required: false,
            serializedName: 'refreshToken',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          expiresIn: {
            required: false,
            serializedName: 'expiresIn',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AuthInfoUpdateParameters;