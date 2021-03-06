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

const models = require('./index');

/**
 * A SQL virtual machine.
 *
 * @extends models['TrackedResource']
 */
class SqlVirtualMachine extends models['TrackedResource'] {
  /**
   * Create a SqlVirtualMachine.
   * @property {object} [identity] Azure Active Directory identity of the
   * server.
   * @property {uuid} [identity.principalId] The Azure Active Directory
   * principal id.
   * @property {string} [identity.type] The identity type. Set this to
   * 'SystemAssigned' in order to automatically create and assign an Azure
   * Active Directory principal for the resource. Possible values include:
   * 'SystemAssigned'
   * @property {uuid} [identity.tenantId] The Azure Active Directory tenant id.
   * @property {string} [virtualMachineResourceId] ARM Resource id of
   * underlying virtual machine created from SQL marketplace image.
   * @property {string} [provisioningState] Provisioning state to track the
   * aysnc operation status.
   * @property {string} [sqlImageOffer] SQL image offer. Examples include
   * SQL2016-WS2016, SQL2017-WS2016.
   * @property {string} [sqlServerLicenseType] SQL Server license type.
   * Possible values include: 'PAYG', 'AHUB'
   * @property {string} [sqlImageSku] SQL image sku. Possible values include:
   * 'Developer', 'Express', 'Standard', 'Enterprise', 'Web'
   * @property {string} [sqlVirtualMachineGroupResourceId] ARM resource id of
   * the SQL virtual machine group this SQL virtual machine is or will be part
   * of.
   * @property {object} [wsfcDomainCredentials] Domain credentials for setting
   * up Windows Server Failover Cluster for SQL availability group.
   * @property {string} [wsfcDomainCredentials.clusterBootstrapAccountPassword]
   * Cluster bootstrap account password.
   * @property {string} [wsfcDomainCredentials.clusterOperatorAccountPassword]
   * Cluster operator account password.
   * @property {string} [wsfcDomainCredentials.sqlServiceAccountPassword] SQL
   * service account password.
   * @property {object} [autoPatchingSettings] Auto patching settings for
   * applying critical security updates to SQL virtual machine.
   * @property {boolean} [autoPatchingSettings.enable] Enable or disable
   * autopatching on SQL virtual machine.
   * @property {string} [autoPatchingSettings.dayOfWeek] Day of week to apply
   * the patch on. Possible values include: 'Monday', 'Tuesday', 'Wednesday',
   * 'Thursday', 'Friday', 'Saturday', 'Sunday'
   * @property {number} [autoPatchingSettings.maintenanceWindowStartingHour]
   * Hour of the day when patching is initiated. Local VM time.
   * @property {number} [autoPatchingSettings.maintenanceWindowDuration]
   * Duration of patching.
   * @property {object} [autoBackupSettings] Auto backup settings for SQL
   * Server.
   * @property {boolean} [autoBackupSettings.enable] Enable or disable
   * autobackup on SQL virtual machine.
   * @property {boolean} [autoBackupSettings.enableEncryption] Enable or
   * disable encryption for backup on SQL virtual machine.
   * @property {number} [autoBackupSettings.retentionPeriod] Retention period
   * of backup: 1-30 days.
   * @property {string} [autoBackupSettings.storageAccountUrl] Storage account
   * url where backup will be taken to.
   * @property {string} [autoBackupSettings.storageAccessKey] Storage account
   * key where backup will be taken to.
   * @property {string} [autoBackupSettings.password] Password for encryption
   * on backup.
   * @property {boolean} [autoBackupSettings.backupSystemDbs] Include or
   * exclude system databases from auto backup.
   * @property {string} [autoBackupSettings.backupScheduleType] Backup schedule
   * type. Possible values include: 'Manual', 'Automated'
   * @property {string} [autoBackupSettings.fullBackupFrequency] Frequency of
   * full backups. In both cases, full backups begin during the next scheduled
   * time window. Possible values include: 'Daily', 'Weekly'
   * @property {number} [autoBackupSettings.fullBackupStartTime] Start time of
   * a given day during which full backups can take place. 0-23 hours.
   * @property {number} [autoBackupSettings.fullBackupWindowHours] Duration of
   * the time window of a given day during which full backups can take place.
   * 1-23 hours.
   * @property {number} [autoBackupSettings.logBackupFrequency] Frequency of
   * log backups. 5-60 minutes.
   * @property {object} [keyVaultCredentialSettings] Key vault credential
   * settings.
   * @property {boolean} [keyVaultCredentialSettings.enable] Enable or disable
   * key vault credential setting.
   * @property {string} [keyVaultCredentialSettings.credentialName] Credential
   * name.
   * @property {string} [keyVaultCredentialSettings.azureKeyVaultUrl] Azure Key
   * Vault url.
   * @property {string} [keyVaultCredentialSettings.servicePrincipalName]
   * Service principal name to access key vault.
   * @property {string} [keyVaultCredentialSettings.servicePrincipalSecret]
   * Service principal name secret to access key vault.
   * @property {object} [serverConfigurationsManagementSettings] SQL Server
   * configuration management settings.
   * @property {object}
   * [serverConfigurationsManagementSettings.sqlConnectivityUpdateSettings] SQL
   * connectivity type settings.
   * @property {string}
   * [serverConfigurationsManagementSettings.sqlConnectivityUpdateSettings.connectivityType]
   * SQL Server connectivity option. Possible values include: 'LOCAL',
   * 'PRIVATE', 'PUBLIC'
   * @property {number}
   * [serverConfigurationsManagementSettings.sqlConnectivityUpdateSettings.port]
   * SQL Server port.
   * @property {string}
   * [serverConfigurationsManagementSettings.sqlConnectivityUpdateSettings.sqlAuthUpdateUserName]
   * SQL Server sysadmin login to create.
   * @property {string}
   * [serverConfigurationsManagementSettings.sqlConnectivityUpdateSettings.sqlAuthUpdatePassword]
   * SQL Server sysadmin login password.
   * @property {object}
   * [serverConfigurationsManagementSettings.sqlWorkloadTypeUpdateSettings] SQL
   * workload type settings.
   * @property {string}
   * [serverConfigurationsManagementSettings.sqlWorkloadTypeUpdateSettings.sqlWorkloadType]
   * SQL Server workload type. Possible values include: 'GENERAL', 'OLTP', 'DW'
   * @property {object}
   * [serverConfigurationsManagementSettings.sqlStorageUpdateSettings] SQL
   * storage update settings.
   * @property {number}
   * [serverConfigurationsManagementSettings.sqlStorageUpdateSettings.diskCount]
   * Virtual machine disk count.
   * @property {string}
   * [serverConfigurationsManagementSettings.sqlStorageUpdateSettings.diskConfigurationType]
   * Disk configuration to apply to SQL Server. Possible values include: 'NEW',
   * 'EXTEND', 'ADD'
   * @property {number}
   * [serverConfigurationsManagementSettings.sqlStorageUpdateSettings.startingDeviceId]
   * Device id of the first disk to be updated.
   * @property {object}
   * [serverConfigurationsManagementSettings.additionalFeaturesServerConfigurations]
   * Additional SQL feature settings.
   * @property {boolean}
   * [serverConfigurationsManagementSettings.additionalFeaturesServerConfigurations.isRServicesEnabled]
   * Enable or disable R services (SQL 2016 onwards).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SqlVirtualMachine
   *
   * @returns {object} metadata of SqlVirtualMachine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SqlVirtualMachine',
      type: {
        name: 'Composite',
        className: 'SqlVirtualMachine',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          identity: {
            required: false,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'ResourceIdentity'
            }
          },
          virtualMachineResourceId: {
            required: false,
            serializedName: 'properties.virtualMachineResourceId',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          sqlImageOffer: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sqlImageOffer',
            type: {
              name: 'String'
            }
          },
          sqlServerLicenseType: {
            required: false,
            serializedName: 'properties.sqlServerLicenseType',
            type: {
              name: 'String'
            }
          },
          sqlImageSku: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sqlImageSku',
            type: {
              name: 'String'
            }
          },
          sqlVirtualMachineGroupResourceId: {
            required: false,
            serializedName: 'properties.sqlVirtualMachineGroupResourceId',
            type: {
              name: 'String'
            }
          },
          wsfcDomainCredentials: {
            required: false,
            serializedName: 'properties.wsfcDomainCredentials',
            type: {
              name: 'Composite',
              className: 'WsfcDomainCredentials'
            }
          },
          autoPatchingSettings: {
            required: false,
            serializedName: 'properties.autoPatchingSettings',
            type: {
              name: 'Composite',
              className: 'AutoPatchingSettings'
            }
          },
          autoBackupSettings: {
            required: false,
            serializedName: 'properties.autoBackupSettings',
            type: {
              name: 'Composite',
              className: 'AutoBackupSettings'
            }
          },
          keyVaultCredentialSettings: {
            required: false,
            serializedName: 'properties.keyVaultCredentialSettings',
            type: {
              name: 'Composite',
              className: 'KeyVaultCredentialSettings'
            }
          },
          serverConfigurationsManagementSettings: {
            required: false,
            serializedName: 'properties.serverConfigurationsManagementSettings',
            type: {
              name: 'Composite',
              className: 'ServerConfigurationsManagementSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = SqlVirtualMachine;
