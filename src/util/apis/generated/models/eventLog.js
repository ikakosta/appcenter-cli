/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventLog class.
 * @constructor
 * Event log.
 *
 * @member {uuid} sessionId Session ID.
 * 
 * @member {uuid} id Unique identifier for this event.
 * 
 * @member {string} name Name of the event.
 * 
 */
function EventLog() {
  EventLog['super_'].call(this);
}

util.inherits(EventLog, models['LogWithProperties']);

/**
 * Defines the metadata of EventLog
 *
 * @returns {object} metadata of EventLog
 *
 */
EventLog.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventLog',
    type: {
      name: 'Composite',
      className: 'EventLog',
      modelProperties: {
        timestamp: {
          required: true,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        installId: {
          required: true,
          serializedName: 'install_id',
          type: {
            name: 'String'
          }
        },
        device: {
          required: true,
          serializedName: 'device',
          type: {
            name: 'Composite',
            className: 'Device'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
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
        sessionId: {
          required: true,
          serializedName: 'session_id',
          type: {
            name: 'String'
          }
        },
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = EventLog;
