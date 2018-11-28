/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  init: async function (req, res) {
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    var orderModels;
    switch (req.query.status) {
      case 'all':
        orderModels = await Order.find({});
        break;
      case 'undelivered':
        orderModels = await Order.find({
          where: {
            orderStatus: 'isOrdered'
          }
        });
        break;
      case 'delivered':
        orderModels = await Order.find({
          where: {
            orderStatus: 'isDelivered'
          }
        });
        break;
      default:
        orderModels = await Order.find({});
    }
    return res.view('pages/order', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      orderModels: orderModels
    });
  },
  detail: async function (req, res) {
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    var orderModel = await Order.findOne(req.params.id).populate('manipulatedBy');
    return res.view('pages/orderdetail', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      orderModel: orderModel
    });
  },
  deliver: async function (req, res) {
    sails.log(req.body.orderId);
    var emp = await Employee.findOne({
      username: req.session.username
    });
    await Order.addToCollection(req.body.orderId, 'manipulatedBy').members(emp.id);
    await Order.update(req.body.orderId).set({
      orderTrackingNumber: req.body.trackingNumber,
      orderStatus: 'isDelivered',
    }).fetch();
    return res.status(200).json({});
  }
};
