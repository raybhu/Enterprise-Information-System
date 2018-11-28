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
      where: { department: req.query.d },
      sort: 'salary ASC',
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

    if (req.method == "GET") return res.forbidden();

    var models = await Employee.destroy(req.params.id).fetch();

    if (models.length == 0) return res.notFound();

    return res.send("Employee Fired.");

  },

  // action - update
  update: async function (req, res) {

    if (req.method == "GET")
      return res.forbidden();
    else {

      if (typeof req.body.Employee === "undefined")
        return res.badRequest("Form-data not received.");

      var models = await Employee.update(req.params.id).set({
        username: req.body.Employee.username,
        password: req.body.Employee.password,
        department: req.body.Employee.department,
        salary: req.body.Employee.salary,
      }).fetch();

      if (models.length == 0) return res.notFound();

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
        state: "Update Success!",
        target: target,
      });

    }
  },

  // action - create
  add: async function (req, res) {

    if (req.method == "GET") return res.forbidden();


    if (typeof req.body.Employee === "undefined")
      return res.badRequest("Form-data not received.");

    await Employee.create(req.body.Employee);

    return res.send("Successfully created!");
  }
};
