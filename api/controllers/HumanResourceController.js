/**
 * HumanResourceController
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
    var emps = await Employee.find({
      where: {
        department: req.query.d
      },
      sort: 'username ASC',
    });
    return res.view('pages/humanresource', {
      layout: 'layouts/general-layout',
      item: typeof req.query.d === 'undefined' ? null : req.query.d,
      emp: typeof emp === 'undefined' ? null : emp,
      emps: typeof emps === 'undefined' ? null : emps,
    });
  },
  detail: async function (req, res) {
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    var target = await Employee.findOne(req.params.id);
    sails.log(target);
    return res.view('pages/employeedetail', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
      state: null,
      target: target,
    });
  },
  // action - delete
  delete: async function (req, res) {
    await Employee.destroy(req.body.id).fetch();
    return res.status(200).json({});
  },
  // action - update
  update: async function (req, res) {
    await Employee.update(req.body.id).set({
      username: req.body.username,
      password: req.body.password,
      department: req.body.department,
      salary: req.body.salary,
    }).fetch();
    sails.log(req.body.username);
    return res.status(200).json({});
  },
  // action - create
  add: async function (req, res) {
    await Employee.create(req.body.Employee);
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    var emps = await Employee.find({
      where: {
        department: req.query.d
      },
      sort: 'username ASC',
    });
    return res.view('pages/humanresource', {
      layout: 'layouts/general-layout',
      item: typeof req.query.d === 'undefined' ? null : req.query.d,
      emp: typeof emp === 'undefined' ? null : emp,
      emps: typeof emps === 'undefined' ? null : emps,
    });
  },
};
