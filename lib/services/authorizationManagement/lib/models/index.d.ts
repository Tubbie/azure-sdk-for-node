/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the RoleAssignmentFilter class.
 * @constructor
 * Role Assignments filter
 * @member {string} [principalId] Returns role assignment of the specific
 * principal.
 * 
 */
export interface RoleAssignmentFilter {
    principalId?: string;
}

/**
 * @class
 * Initializes a new instance of the RoleDefinitionFilter class.
 * @constructor
 * Role Definitions filter
 * @member {string} [roleName] Returns role definition with the specific name.
 * 
 */
export interface RoleDefinitionFilter {
    roleName?: string;
}

/**
 * @class
 * Initializes a new instance of the ClassicAdministratorProperties class.
 * @constructor
 * Classic Administrator properties.
 * @member {string} [emailAddress] Gets or sets the email address
 * 
 * @member {string} [role] Gets or sets the role
 * 
 */
export interface ClassicAdministratorProperties {
    emailAddress?: string;
    role?: string;
}

/**
 * @class
 * Initializes a new instance of the ClassicAdministrator class.
 * @constructor
 * Classic Administrators
 * @member {string} [id] Gets or sets the classic administrator id.
 * 
 * @member {string} [name] Gets or sets the classic administrator name.
 * 
 * @member {string} [type] Gets or sets the classic administrator type.
 * 
 * @member {object} [properties] Gets or sets the classic administrator
 * properties.
 * 
 * @member {string} [properties.emailAddress] Gets or sets the email address
 * 
 * @member {string} [properties.role] Gets or sets the role
 * 
 */
export interface ClassicAdministrator {
    id?: string;
    name?: string;
    type?: string;
    properties?: ClassicAdministratorProperties;
}

/**
 * @class
 * Initializes a new instance of the Permission class.
 * @constructor
 * Role definition permissions.
 * @member {array} [actions] Role definition allowed actions.
 * 
 * @member {array} [notActions] Role definition denied actions.
 * 
 */
export interface Permission {
    actions?: string[];
    notActions?: string[];
}

/**
 * @class
 * Initializes a new instance of the ProviderOperation class.
 * @constructor
 * Operation
 * @member {string} [name] Gets or sets the operation name
 * 
 * @member {string} [displayName] Gets or sets the operation display name
 * 
 * @member {string} [description] Gets or sets the operation description
 * 
 * @member {string} [origin] Gets or sets the operation origin
 * 
 * @member {object} [properties] Gets or sets the operation properties
 * 
 */
export interface ProviderOperation {
    name?: string;
    displayName?: string;
    description?: string;
    origin?: string;
    properties?: any;
}

/**
 * @class
 * Initializes a new instance of the ResourceType class.
 * @constructor
 * Resource Type
 * @member {string} [name] Gets or sets the resource type name
 * 
 * @member {string} [displayName] Gets or sets the resource type display name
 * 
 * @member {array} [operations] Gets or sets the resource type operations
 * 
 */
export interface ResourceType {
    name?: string;
    displayName?: string;
    operations?: ProviderOperation[];
}

/**
 * @class
 * Initializes a new instance of the ProviderOperationsMetadata class.
 * @constructor
 * Provider Operations metadata
 * @member {string} [id] Gets or sets the provider id.
 * 
 * @member {string} [name] Gets or sets the provider name
 * 
 * @member {string} [type] Gets or sets the provider type
 * 
 * @member {string} [displayName] Gets or sets the provider display name
 * 
 * @member {array} [resourceTypes] Gets or sets the provider resource types
 * 
 * @member {array} [operations] Gets or sets the provider operations
 * 
 */
export interface ProviderOperationsMetadata {
    id?: string;
    name?: string;
    type?: string;
    displayName?: string;
    resourceTypes?: ResourceType[];
    operations?: ProviderOperation[];
}

/**
 * @class
 * Initializes a new instance of the RoleAssignmentPropertiesWithScope class.
 * @constructor
 * Role assignment properties with scope.
 * @member {string} [scope] Gets or sets role assignment scope.
 * 
 * @member {string} [roleDefinitionId] Gets or sets role definition id.
 * 
 * @member {string} [principalId] Gets or sets principal Id.
 * 
 */
export interface RoleAssignmentPropertiesWithScope {
    scope?: string;
    roleDefinitionId?: string;
    principalId?: string;
}

/**
 * @class
 * Initializes a new instance of the RoleAssignment class.
 * @constructor
 * Role Assignments
 * @member {string} [id] Gets or sets role assignment id.
 * 
 * @member {string} [name] Gets or sets role assignment name.
 * 
 * @member {string} [type] Gets or sets role assignment type.
 * 
 * @member {object} [properties] Gets or sets role assignment properties.
 * 
 * @member {string} [properties.scope] Gets or sets role assignment scope.
 * 
 * @member {string} [properties.roleDefinitionId] Gets or sets role definition
 * id.
 * 
 * @member {string} [properties.principalId] Gets or sets principal Id.
 * 
 */
export interface RoleAssignment {
    id?: string;
    name?: string;
    type?: string;
    properties?: RoleAssignmentPropertiesWithScope;
}

/**
 * @class
 * Initializes a new instance of the RoleAssignmentProperties class.
 * @constructor
 * Role assignment properties.
 * @member {string} [roleDefinitionId] Gets or sets role definition id.
 * 
 * @member {string} [principalId] Gets or sets principal Id.
 * 
 */
export interface RoleAssignmentProperties {
    roleDefinitionId?: string;
    principalId?: string;
}

/**
 * @class
 * Initializes a new instance of the RoleAssignmentCreateParameters class.
 * @constructor
 * Role assignment create parameters.
 * @member {object} [properties] Gets or sets role assignment properties.
 * 
 * @member {string} [properties.roleDefinitionId] Gets or sets role definition
 * id.
 * 
 * @member {string} [properties.principalId] Gets or sets principal Id.
 * 
 */
export interface RoleAssignmentCreateParameters {
    properties?: RoleAssignmentProperties;
}

/**
 * @class
 * Initializes a new instance of the RoleDefinitionProperties class.
 * @constructor
 * Role definition properties.
 * @member {string} [roleName] Gets or sets role name.
 * 
 * @member {string} [description] Gets or sets role definition description.
 * 
 * @member {string} [type] Gets or sets role type.
 * 
 * @member {array} [permissions] Gets or sets role definition permissions.
 * 
 * @member {array} [assignableScopes] Gets or sets role definition assignable
 * scopes.
 * 
 */
export interface RoleDefinitionProperties {
    roleName?: string;
    description?: string;
    type?: string;
    permissions?: Permission[];
    assignableScopes?: string[];
}

/**
 * @class
 * Initializes a new instance of the RoleDefinition class.
 * @constructor
 * Role definition.
 * @member {string} [id] Gets or sets role definition id.
 * 
 * @member {string} [name] Gets or sets role definition name.
 * 
 * @member {string} [type] Gets or sets role definition type.
 * 
 * @member {object} [properties] Gets or sets role definition properties.
 * 
 * @member {string} [properties.roleName] Gets or sets role name.
 * 
 * @member {string} [properties.description] Gets or sets role definition
 * description.
 * 
 * @member {string} [properties.type] Gets or sets role type.
 * 
 * @member {array} [properties.permissions] Gets or sets role definition
 * permissions.
 * 
 * @member {array} [properties.assignableScopes] Gets or sets role definition
 * assignable scopes.
 * 
 */
export interface RoleDefinition {
    id?: string;
    name?: string;
    type?: string;
    properties?: RoleDefinitionProperties;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 */
export interface SubResource extends BaseResource {
    id?: string;
}
