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
 * Class representing a ApplicationsResponseValueItem.
 */
class ApplicationsResponseValueItem {
  /**
   * Create a ApplicationsResponseValueItem.
   * @property {string} [id]
   * @property {date} [createdAt]
   * @property {string} [name]
   * @property {string} [signInAudience]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationsResponseValueItem
   *
   * @returns {object} metadata of ApplicationsResponseValueItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationsResponse_valueItem',
      type: {
        name: 'Composite',
        className: 'ApplicationsResponseValueItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: false,
            serializedName: 'createdAt',
            type: {
              name: 'DateTime'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          signInAudience: {
            required: false,
            serializedName: 'signInAudience',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationsResponseValueItem;