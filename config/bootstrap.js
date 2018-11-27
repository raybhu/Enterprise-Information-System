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
  }]);

  if (await Item.count() > 0) {
    return done();
  }
  await Item.createEach([{
    itemId: '000001',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isInStock',
  }, {
    itemId: '000002',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isInStock',
  }, {
    itemId: '000003',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isInStock',
  }, {
    itemId: '000004',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isInStock',
  }, {
    itemId: '000005',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isOrdered',
  }, {
    itemId: '000006',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isOrdered',
  }, {
    itemId: '000007',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isOrdered',
  }, {
    itemId: '000008',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isOrdered',
  }, {
    itemId: '000009',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isDelivered',
  }, {
    itemId: '000010',
    itemModel: 'iPhone X',
    itemPrice: '5000',
    itemStatus: 'isDelivered',
  }, {
    itemId: '000011',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isDelivered',
  }, {
    itemId: '000012',
    itemModel: 'iPhone XS',
    itemPrice: '5000',
    itemStatus: 'isDelivered',
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
  }, {
    orderId: '000002',
    orderUsername: 'Pony Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000003',
    orderUsername: 'Whatever Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000004',
    orderUsername: 'Any Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000005',
    orderUsername: 'Jack Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000006',
    orderUsername: 'Pony Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000007',
    orderUsername: 'Whatever Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
  }, {
    orderId: '000008',
    orderUsername: 'Any Ma',
    orderPrice: 5000,
    orderAddress: 'Hong Kong Baptist University, Kowloon Tong, Kowloon, Hong Kong',
    orderDate: '2018-11-30',
    orderPaymentCard: '82041934141',
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
  const testOrder1 = await Order.findOne({
    orderId: '000001'
  });
  const testOrder2 = await Order.findOne({
    orderId: '000002'
  });
  const testOrder3 = await Order.findOne({
    orderId: '000003'
  });
  const testOrder4 = await Order.findOne({
    orderId: '000004'
  });
  const testOrder5 = await Order.findOne({
    orderId: '000005'
  });
  const testOrder6 = await Order.findOne({
    orderId: '000006'
  });
  const testOrder7 = await Order.findOne({
    orderId: '000007'
  });
  const testOrder8 = await Order.findOne({
    orderId: '000008'
  });
  const orderStaff = await Employee.findOne({
    username: 'staff1'
  });

  await Order.addToCollection(testOrder1.id, 'associatedItem').members(testOrderedItem1.id);
  await Order.addToCollection(testOrder2.id, 'associatedItem').members(testOrderedItem2.id);
  await Order.addToCollection(testOrder3.id, 'associatedItem').members(testOrderedItem3.id);
  await Order.addToCollection(testOrder4.id, 'associatedItem').members(testOrderedItem4.id);
  await Order.addToCollection(testOrder5.id, 'associatedItem').members(testDeliveredItem1.id);
  await Order.addToCollection(testOrder6.id, 'associatedItem').members(testDeliveredItem2.id);
  await Order.addToCollection(testOrder7.id, 'associatedItem').members(testDeliveredItem3.id);
  await Order.addToCollection(testOrder8.id, 'associatedItem').members(testDeliveredItem4.id);

  await Order.addToCollection(testOrder5.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testOrder6.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testOrder7.id, 'manipulatedBy').members(orderStaff.id);
  await Order.addToCollection(testOrder8.id, 'manipulatedBy').members(orderStaff.id);


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
