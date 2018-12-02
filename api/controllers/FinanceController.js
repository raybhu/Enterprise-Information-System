/**
 * FinanceController
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
    orderModels = await Order.find({});
    var orderAmount = 0;
    var orderQuantities = 0;
    orderModels.forEach(function (model) {
      orderAmount += model.orderPrice;
      orderQuantities++;
    });

    var itemModels;
    itemModels = await Item.find({});
    var itemAmount = 0;
    var itemQuantities = 0;
    itemModels.forEach(function (model) {
      itemAmount += model.itemPurchasePrice;
      itemQuantities++;
    });

    return res.view('pages/finance', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      orders: orderModels,
      orderA: orderAmount,
      orderQ: orderQuantities,
      items:itemModels,
      itemA: itemAmount,
      itemQ: itemQuantities,
    });
  },

};
