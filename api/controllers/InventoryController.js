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
    var itemModels;
    switch (req.query.status) {
      case 'all':
        itemModels = await Item.find({}).populate('associatedOrder');
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
        break;
      case 'instock':
        itemModels = await Item.find({}).populate('associatedOrder', {
          where: {
            associatedOrder: []
          }
        });
        break;
      default:
        itemModels = await Item.find({}).populate('associatedOrder');
    }
    return res.view('pages/inventory', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      itemModels: itemModels,
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
    sails.log(itemModel);
    return res.view('pages/itemdetail', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      itemModel: itemModel,
    });
  },
  delete: async function (req, res) {
    await Item.destroy(req.body.itemId).fetch();
    sails.log(req.body.itemId);
    return res.status(200).json({});
  }
};
