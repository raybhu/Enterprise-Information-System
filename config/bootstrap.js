/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
module.exports.bootstrap = async function (done) {
  if (await Employee.count() > 0) {
    return done();
  }
  await Employee.createEach([{
    username: 'staff1',
    password: '123456',
    department: 'Order',
  }, {
    username: 'staff2',
    password: '123456',
    department: 'Inventory',
  }, {
    username: 'staff3',
    password: '123456',
    department: 'Accounting',
  }, {
    username: 'staff4',
    password: '123456',
    department: 'HumanResource',
  }, {
    username: 'boss',
    password: '123456',
    department: 'Boss',
  }]);
  if (await Item.count() > 0) {
    return done();
  }
  await Item.createEach([{
    itemId: '000001',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000002',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000003',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000004',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000005',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-10-30',
  }, {
    itemId: '000006',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-10-30',
  }, {
    itemId: '000007',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-10-30',
  }, {
    itemId: '000008',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-10-30',
  }, {
    itemId: '000009',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-10-30',
  }, {
    itemId: '000010',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000011',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }, {
    itemId: '000012',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemPurchasePrice: '3500',
    itemImportDate: '2018-11-30',
  }]);
  if (await Order.count() > 0) {
    return done();
  }
  await Order.createEach([{
    orderId: '000001',
    orderUsername: 'Jack Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isOrdered',
  }, {
    orderId: '000002',
    orderUsername: 'Pony Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isOrdered',
  }, {
    orderId: '000003',
    orderUsername: 'Whatever Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isOrdered',
  }, {
    orderId: '000004',
    orderUsername: 'Any Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isOrdered',
  }, {
    orderId: '000005',
    orderUsername: 'Jack Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isDelivered',
    orderTrackingNumber: '0987654321',
  }, {
    orderId: '000006',
    orderUsername: 'Pony Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isDelivered',
    orderTrackingNumber: '0987654321',
  }, {
    orderId: '000007',
    orderUsername: 'Whatever Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isDelivered',
    orderTrackingNumber: '0987654321',
  }, {
    orderId: '000008',
    orderUsername: 'Any Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
    orderStatus: 'isDelivered',
    orderTrackingNumber: '0987654321',
  }]);
  const testOrderedItem1 = await Item.findOne({
    itemId: '000005'
  });
  const testOrderedItem2 = await Item.findOne({
    itemId: '000006'
  });
  const testOrderedItem3 = await Item.findOne({
    itemId: '000007'
  });
  const testOrderedItem4 = await Item.findOne({
    itemId: '000008'
  });
  const testDeliveredItem1 = await Item.findOne({
    itemId: '000009'
  });
  const testDeliveredItem2 = await Item.findOne({
    itemId: '000010'
  });
  const testDeliveredItem3 = await Item.findOne({
    itemId: '000011'
  });
  const testDeliveredItem4 = await Item.findOne({
    itemId: '000012'
  });
  const testOrderedOrder1 = await Order.findOne({
    orderId: '000001'
  });
  const testOrderedOrder2 = await Order.findOne({
    orderId: '000002'
  });
  const testOrderedOrder3 = await Order.findOne({
    orderId: '000003'
  });
  const testOrderedOrder4 = await Order.findOne({
    orderId: '000004'
  });
  const testDeliveredOrder1 = await Order.findOne({
    orderId: '000005'
  });
  const testDeliveredOrder2 = await Order.findOne({
    orderId: '000006'
  });
  const testDeliveredOrder3 = await Order.findOne({
    orderId: '000007'
  });
  const testDeliveredOrder4 = await Order.findOne({
    orderId: '000008'
  });
  const orderStaff = await Employee.findOne({
    username: 'staff1'
  });
  await Order.addToCollection(testOrderedOrder1.id, 'associatedItem').members(testOrderedItem1.id);
  await Order.addToCollection(testOrderedOrder2.id, 'associatedItem').members(testOrderedItem2.id);
  await Order.addToCollection(testOrderedOrder3.id, 'associatedItem').members(testOrderedItem3.id);
  await Order.addToCollection(testOrderedOrder4.id, 'associatedItem').members(testOrderedItem4.id);
  await Order.addToCollection(testDeliveredOrder1.id, 'associatedItem').members(testDeliveredItem1.id);
  await Order.addToCollection(testDeliveredOrder2.id, 'associatedItem').members(testDeliveredItem2.id);
  await Order.addToCollection(testDeliveredOrder3.id, 'associatedItem').members(testDeliveredItem3.id);
  await Order.addToCollection(testDeliveredOrder4.id, 'associatedItem').members(testDeliveredItem4.id);
  await Order.addToCollection(testDeliveredOrder1.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testDeliveredOrder2.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testDeliveredOrder3.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testDeliveredOrder4.id, 'manipulatedBy').members(orderStaff.id);
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
