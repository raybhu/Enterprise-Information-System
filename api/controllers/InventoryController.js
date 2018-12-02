/**
 * InventoryController
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
    var categoryStatus = 'All';
    var itemModels;
    switch (req.query.status) {
      case 'all':
        itemModels = await Item.find({}).populate('associatedOrder');
        categoryStatus = 'All';
        break;
      case 'ordered':
        itemModels = await Item.find({}).populate('associatedOrder', );
        var newModels = [];
        itemModels.forEach((model) => {
          if (model.associatedOrder.length > 0) {
            newModels.push(model);
          }
        });
        itemModels = newModels;
        categoryStatus = 'Ordered';
        break;
      case 'instock':
        itemModels = await Item.find({}).populate('associatedOrder', {
          where: {
            associatedOrder: []
          }
        });
        categoryStatus = 'In Stock';
        break;
      default:
        itemModels = await Item.find({}).populate('associatedOrder');
    }
    return res.view('pages/inventory', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      itemModels: itemModels,
      categoryStatus: categoryStatus,
    });
  },
  detail: async function (req, res) {
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    var itemModel;
    itemModel = await Item.findOne({
      id: req.params.id
    }).populate('associatedOrder');

    var tmpModel = await Item.findOne({
      id: req.params.id
    }).populate('certifiedBy');

    if (tmpModel.certifiedBy.length > 0) {
      var operationEmpModel = tmpModel.certifiedBy[0];
    }
    return res.view('pages/itemdetail', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      itemModel: itemModel,
      operationEmpModel: typeof operationEmpModel === 'undefined' ? null : operationEmpModel,
    });
  },
  delete: async function (req, res) {
    await Item.destroy(req.body.itemId).fetch();
    return res.status(200).json({});
  },
  certify: async function (req, res) {
    await Item.update(req.body.itemId).set({
      itemStatus: 'isReviewed',
    }).fetch();
    return res.status(200).json({});
  }
};
