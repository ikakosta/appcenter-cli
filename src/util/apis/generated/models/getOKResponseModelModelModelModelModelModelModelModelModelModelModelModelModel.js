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
 * Apple Mapping Request Type
 *
 */
class GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel {
  /**
   * Create a GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel.
   * @property {string} [appId] ID of the apple application in Mobile Center
   * @property {string} [serviceConnectionId] Id for the shared service
   * connection. In case of Apple AppStore, this connection will be used to
   * create and connect to the Apple AppStore in Mobile Center.
   * @property {string} [appleId] ID of the apple application in apple store
   * @property {string} [teamIdentifier] ID of the Team associated with the app
   * in apple store
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetOKResponse',
      type: {
        name: 'Composite',
        className: 'GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          },
          appleId: {
            required: false,
            serializedName: 'apple_id',
            type: {
              name: 'String'
            }
          },
          teamIdentifier: {
            required: false,
            serializedName: 'team_identifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetOKResponseModelModelModelModelModelModelModelModelModelModelModelModelModel;