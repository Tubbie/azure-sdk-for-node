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
 * Get GitHub access token request definition.
 *
 */
class GitHubAccessTokenRequest {
  /**
   * Create a GitHubAccessTokenRequest.
   * @member {string} gitHubAccessCode GitHub access code.
   * @member {string} [gitHubClientId] GitHub application client ID.
   * @member {string} gitHubAccessTokenBaseUrl GitHub access token base URL.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubAccessTokenRequest
   *
   * @returns {object} metadata of GitHubAccessTokenRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubAccessTokenRequest',
      type: {
        name: 'Composite',
        className: 'GitHubAccessTokenRequest',
        modelProperties: {
          gitHubAccessCode: {
            required: true,
            serializedName: 'gitHubAccessCode',
            type: {
              name: 'String'
            }
          },
          gitHubClientId: {
            required: false,
            serializedName: 'gitHubClientId',
            type: {
              name: 'String'
            }
          },
          gitHubAccessTokenBaseUrl: {
            required: true,
            serializedName: 'gitHubAccessTokenBaseUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubAccessTokenRequest;
