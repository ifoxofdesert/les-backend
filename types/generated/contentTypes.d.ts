import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<'admin::transfer-token', 'oneToMany', 'admin::transfer-token-permission'>;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<'admin::transfer-token-permission', 'manyToOne', 'admin::transfer-token'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminWorkflow extends Schema.CollectionType {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    stages: Attribute.Relation<'admin::workflow', 'oneToMany', 'admin::workflow-stage'>;
    contentTypes: Attribute.JSON & Attribute.Required & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::workflow', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::workflow', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface AdminWorkflowStage extends Schema.CollectionType {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String;
    color: Attribute.String & Attribute.DefaultTo<'#4945FF'>;
    workflow: Attribute.Relation<'admin::workflow-stage', 'manyToOne', 'admin::workflow'>;
    permissions: Attribute.Relation<'admin::workflow-stage', 'manyToMany', 'admin::permission'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::workflow-stage', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::workflow-stage', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> & Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>;
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>;
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> & Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::content-releases.release-action', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::content-releases.release-action', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<'plugin::users-permissions.permission', 'manyToOne', 'plugin::users-permissions.role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<'plugin::users-permissions.role', 'oneToMany', 'plugin::users-permissions.user'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<'plugin::users-permissions.user', 'manyToOne', 'plugin::users-permissions.role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiContactContact extends Schema.SingleType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    general: Attribute.Component<'info-page.general'> & Attribute.Required;
    contactInfo: Attribute.Component<'contact-page.contact-info'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiFeedbackRequestFeedbackRequest extends Schema.CollectionType {
  collectionName: 'feedback_requests';
  info: {
    singularName: 'feedback-request';
    pluralName: 'feedback-requests';
    displayName: '\u0417\u0430\u044F\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 12;
        maxLength: 18;
      }>;
    email: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::feedback-request.feedback-request', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::feedback-request.feedback-request', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    strapi_stage: Attribute.Relation<'api::feedback-request.feedback-request', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::feedback-request.feedback-request', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiFeedbackRequestSettingFeedbackRequestSetting extends Schema.SingleType {
  collectionName: 'feedback_request_settings';
  info: {
    singularName: 'feedback-request-setting';
    pluralName: 'feedback-request-settings';
    displayName: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    emails: Attribute.Relation<'api::feedback-request-setting.feedback-request-setting', 'oneToMany', 'api::mail.mail'>;
    succesTitle: Attribute.String & Attribute.Required;
    succesText: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::feedback-request-setting.feedback-request-setting', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::feedback-request-setting.feedback-request-setting', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    strapi_stage: Attribute.Relation<
      'api::feedback-request-setting.feedback-request-setting',
      'oneToOne',
      'admin::workflow-stage'
    >;
    strapi_assignee: Attribute.Relation<
      'api::feedback-request-setting.feedback-request-setting',
      'oneToOne',
      'admin::user'
    >;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: '\u041F\u043E\u0434\u0432\u0430\u043B';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    phones: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::phone.phone'>;
    menu: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::navigation.navigation'>;
    navigation: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::navigation.navigation'>;
    socials: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::social.social'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiGeneralGeneral extends Schema.SingleType {
  collectionName: 'general';
  info: {
    singularName: 'general';
    pluralName: 'generals';
    displayName: '\u041E\u0431\u0449\u0435\u0435';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    policyUrl: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::general.general', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::general.general', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::general.general', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::general.general', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: '\u0428\u0430\u043F\u043A\u0430';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    phone: Attribute.Relation<'api::header.header', 'oneToOne', 'api::phone.phone'>;
    menu: Attribute.Relation<'api::header.header', 'oneToMany', 'api::navigation.navigation'>;
    socials: Attribute.Relation<'api::header.header', 'oneToMany', 'api::social.social'>;
    burgerBackground: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::header.header', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::header.header', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::header.header', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::header.header', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    meta: Attribute.Component<'general.meta'> & Attribute.Required;
    mainBlock: Attribute.Component<'home.main-block'> & Attribute.Required;
    offersSlider: Attribute.Component<'general.offers-slider'>;
    video: Attribute.Component<'general.video'>;
    questions: Attribute.Component<'general.questions-block'>;
    roomsListBlock: Attribute.Component<'general.rooms-list-block'>;
    afishaEventsBlock: Attribute.Component<'general.afisha-events-block'>;
    reviewSlider: Attribute.Component<'general.review-slider'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiInfoDatapageInfoDatapage extends Schema.CollectionType {
  collectionName: 'info_datapages';
  info: {
    singularName: 'info-datapage';
    pluralName: 'info-datapages';
    displayName: '\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::info-datapage.info-datapage', 'title'>;
    lastUpdate: Attribute.Date;
    meta: Attribute.Component<'general.meta'> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::info-datapage.info-datapage', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::info-datapage.info-datapage', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::info-datapage.info-datapage', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::info-datapage.info-datapage', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiMailMail extends Schema.CollectionType {
  collectionName: 'mails';
  info: {
    singularName: 'mail';
    pluralName: 'mails';
    displayName: '\u041F\u043E\u0447\u0442\u044B';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    mail: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::mail.mail', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::mail.mail', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::mail.mail', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::mail.mail', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations';
  info: {
    singularName: 'navigation';
    pluralName: 'navigations';
    displayName: '\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    isTravel: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiNewNew extends Schema.CollectionType {
  collectionName: 'news';
  info: {
    singularName: 'new';
    pluralName: 'news';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    PreviewCard: Attribute.Component<'news-page.preview-card'> & Attribute.Required;
    pageNews: Attribute.Component<'news-page.page-news'>;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::new.new', 'title'> & Attribute.Required;
    meta: Attribute.Component<'general.meta'> & Attribute.Required;
    order: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      > &
      Attribute.DefaultTo<'0'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiNewsFilterNewsFilter extends Schema.CollectionType {
  collectionName: 'news_filters';
  info: {
    singularName: 'news-filter';
    pluralName: 'news-filters';
    displayName: '\u0422\u0438\u043F\u044B \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tag: Attribute.UID<'api::news-filter.news-filter', 'name'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::news-filter.news-filter', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::news-filter.news-filter', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::news-filter.news-filter', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::news-filter.news-filter', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiPageNewsPageNews extends Schema.SingleType {
  collectionName: 'pages_news';
  info: {
    singularName: 'page-news';
    pluralName: 'pages-news';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u043C\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    meta: Attribute.Component<'general.meta'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    defaultFilter: Attribute.Relation<'api::page-news.page-news', 'oneToOne', 'api::news-filter.news-filter'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page-news.page-news', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::page-news.page-news', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::page-news.page-news', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::page-news.page-news', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiPageVacancyPageVacancy extends Schema.SingleType {
  collectionName: 'page_vacancies';
  info: {
    singularName: 'page-vacancy';
    pluralName: 'page-vacancies';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    meta: Attribute.Component<'info-page.general'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page-vacancy.page-vacancy', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::page-vacancy.page-vacancy', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::page-vacancy.page-vacancy', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::page-vacancy.page-vacancy', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiPaymentPayment extends Schema.CollectionType {
  collectionName: 'payments';
  info: {
    singularName: 'payment';
    pluralName: 'payments';
    displayName: '\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::payment.payment', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::payment.payment', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::payment.payment', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::payment.payment', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiPhonePhone extends Schema.CollectionType {
  collectionName: 'phones';
  info: {
    singularName: 'phone';
    pluralName: 'phones';
    displayName: '\u041D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    mission: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::phone.phone', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::phone.phone', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::phone.phone', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::phone.phone', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiRoomRoom extends Schema.CollectionType {
  collectionName: 'rooms';
  info: {
    singularName: 'room';
    pluralName: 'rooms';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u043E\u043C\u0435\u0440\u043E\u0432';
    description: '';
  };
  options: {
    reviewWorkflows: false;
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::room.room', 'title'> & Attribute.Required;
    meta: Attribute.Component<'general.meta'> & Attribute.Required;
    pageRoom: Attribute.Component<'room-page.page-room'>;
    preview: Attribute.Component<'room-page.preview-card'>;
    order: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      > &
      Attribute.DefaultTo<'0'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiSettingInfoPageSettingInfoPage extends Schema.SingleType {
  collectionName: 'settings_info_pages';
  info: {
    singularName: 'setting-info-page';
    pluralName: 'settings-info-pages';
    displayName: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    menu: Attribute.Relation<'api::setting-info-page.setting-info-page', 'oneToMany', 'api::navigation.navigation'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::setting-info-page.setting-info-page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::setting-info-page.setting-info-page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    strapi_stage: Attribute.Relation<'api::setting-info-page.setting-info-page', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::setting-info-page.setting-info-page', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiSocialSocial extends Schema.CollectionType {
  collectionName: 'socials';
  info: {
    singularName: 'social';
    pluralName: 'socials';
    displayName: '\u0421\u043E\u0446.\u0441\u0435\u0442\u0438';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::social.social', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::social.social', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::social.social', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::social.social', 'oneToOne', 'admin::user'>;
  };
}

export interface ApiVacancyVacancy extends Schema.CollectionType {
  collectionName: 'vacancies';
  info: {
    singularName: 'vacancy';
    pluralName: 'vacancies';
    displayName: '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    experience: Attribute.String;
    employment: Attribute.String;
    salary: Attribute.String;
    responsibilities: Attribute.Component<'general.array-text', true>;
    conditions: Attribute.Component<'general.array-text', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::vacancy.vacancy', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'api::vacancy.vacancy', 'oneToOne', 'admin::user'> & Attribute.Private;
    strapi_stage: Attribute.Relation<'api::vacancy.vacancy', 'oneToOne', 'admin::workflow-stage'>;
    strapi_assignee: Attribute.Relation<'api::vacancy.vacancy', 'oneToOne', 'admin::user'>;
  };
}

export interface AdminAuditLog extends Schema.CollectionType {
  collectionName: 'strapi_audit_logs';
  info: {
    singularName: 'audit-log';
    pluralName: 'audit-logs';
    displayName: 'Audit Log';
  };
  options: {
    draftAndPublish: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    date: Attribute.DateTime & Attribute.Required;
    user: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'>;
    payload: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'> & Attribute.Private;
    updatedBy: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'> & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::workflow': AdminWorkflow;
      'admin::workflow-stage': AdminWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::contact.contact': ApiContactContact;
      'api::feedback-request.feedback-request': ApiFeedbackRequestFeedbackRequest;
      'api::feedback-request-setting.feedback-request-setting': ApiFeedbackRequestSettingFeedbackRequestSetting;
      'api::footer.footer': ApiFooterFooter;
      'api::general.general': ApiGeneralGeneral;
      'api::header.header': ApiHeaderHeader;
      'api::home.home': ApiHomeHome;
      'api::info-datapage.info-datapage': ApiInfoDatapageInfoDatapage;
      'api::mail.mail': ApiMailMail;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::new.new': ApiNewNew;
      'api::news-filter.news-filter': ApiNewsFilterNewsFilter;
      'api::page-news.page-news': ApiPageNewsPageNews;
      'api::page-vacancy.page-vacancy': ApiPageVacancyPageVacancy;
      'api::payment.payment': ApiPaymentPayment;
      'api::phone.phone': ApiPhonePhone;
      'api::room.room': ApiRoomRoom;
      'api::setting-info-page.setting-info-page': ApiSettingInfoPageSettingInfoPage;
      'api::social.social': ApiSocialSocial;
      'api::vacancy.vacancy': ApiVacancyVacancy;
      'admin::audit-log': AdminAuditLog;
    }
  }
}
