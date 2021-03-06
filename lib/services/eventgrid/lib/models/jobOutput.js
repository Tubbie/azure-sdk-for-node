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
 * The event data for a Job output.
 *
 */
class JobOutput {
  /**
   * Create a JobOutput.
   * @member {object} [error] Gets the Job output error.
   * @member {string} [error.code] Error code describing the error. Possible
   * values include: 'ServiceError', 'ServiceTransientError',
   * 'DownloadNotAccessible', 'DownloadTransientError', 'UploadNotAccessible',
   * 'UploadTransientError', 'ConfigurationUnsupported', 'ContentMalformed',
   * 'ContentUnsupported'
   * @member {string} [error.message] A human-readable language-dependent
   * representation of the error.
   * @member {string} [error.category] Helps with categorization of errors.
   * Possible values include: 'Service', 'Download', 'Upload', 'Configuration',
   * 'Content'
   * @member {string} [error.retry] Indicates that it may be possible to retry
   * the Job. If retry is unsuccessful, please contact Azure support via Azure
   * Portal. Possible values include: 'DoNotRetry', 'MayRetry'
   * @member {array} [error.details] An array of details about specific errors
   * that led to this reported error.
   * @member {string} [label] Gets the Job output label.
   * @member {number} progress Gets the Job output progress.
   * @member {string} state Gets the Job output state. Possible values include:
   * 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued',
   * 'Scheduled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobOutput
   *
   * @returns {object} metadata of JobOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobOutput',
      type: {
        name: 'Composite',
        className: 'JobOutput',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'JobError'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          progress: {
            required: true,
            serializedName: 'progress',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued', 'Scheduled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = JobOutput;
