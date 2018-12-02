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

    var date = req.query.date;
    var ali;
    switch (date) {
      case undefined:
        var orderModels;
        orderModels = await Order.find({
          sort: "orderId ASC"
        });
        ali = "All";
        break;
      case "11":
        var orderModels;
        orderModels = await Order.find({
          where: { orderDate: { contains: '-11-' } },
          sort: "orderId ASC"
        });
        ali = "Nov - 2018";
        break;
      case "10":
        var orderModels;
        orderModels = await Order.find({
          where: { orderDate: { contains: '-10-' }, },
          sort: "orderId ASC"
        });
        ali = "Oct - 2018";
        break;
    }

    var orderAmount = 0;
    var orderQuantities = 0;
    orderModels.forEach(function (model) {
      orderAmount += model.orderPrice;
      orderQuantities++;
    });


    var itemModels;
    itemModels = await Item.find({ sort: "itemId ASC" });
    var itemAmount = 0;
    var itemQuantities = 0;
    itemModels.forEach(function (model) {
      itemAmount += model.itemPurchasePrice;
      itemQuantities++;
    });

    return res.view('pages/finance', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      ali:ali,
      orders: orderModels,
      orderA: orderAmount,
      orderQ: orderQuantities,
      items: itemModels,
      itemA: itemAmount,
      itemQ: itemQuantities,
    });
  },

};
