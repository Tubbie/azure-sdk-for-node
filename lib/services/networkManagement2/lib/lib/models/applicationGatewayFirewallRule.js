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
 * A web application firewall rule.
 *
 */
class ApplicationGatewayFirewallRule {
  /**
   * Create a ApplicationGatewayFirewallRule.
   * @member {number} ruleId The identifier of the web application firewall
   * rule.
   * @member {string} [description] The description of the web application
   * firewall rule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayFirewallRule
   *
   * @returns {object} metadata of ApplicationGatewayFirewallRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayFirewallRule',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayFirewallRule',
        modelProperties: {
          ruleId: {
            required: true,
            serializedName: 'ruleId',
            type: {
              name: 'Number'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayFirewallRule;