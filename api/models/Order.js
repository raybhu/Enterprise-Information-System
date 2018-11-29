/**
 * Order.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    orderId: {
      type: 'string',
      required: true,
    },
    orderUsername: {
      type: 'string',
      required: true,
    },
    orderPrice: {
      type: 'number',
      required: true,
    },
    orderAddress: {
      type: 'string',
      required: true,
    },
    orderDate: {
      type: 'string',
      required: true,
    },
    orderPaymentCard: {
      type: 'string',
      required: true,
    },
    manipulatedBy: {
      collection: 'Employee',
      via: 'manipulating',
    },
    associatedItem: {
      collection: 'Item',
      via: 'associatedOrder',
    },
    orderStatus: {
      type: 'string',
      isIn: ['isOrdered', 'isDelivered'],
      required: true,
    },
    orderTrackingNumber: {
      type: 'string',
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
};
