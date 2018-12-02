/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  login: async function (req, res) {
    if (req.method === 'GET') {
      return res.redirect('/');
    }
    if (!req.body.username) {
      return res.badRequest();
    }
    if (!req.body.password) {
      return res.badRequest();
    }
    var emp = await Employee.findOne({
      username: req.body.username
    });
    if (!emp) {
      res.status(401);
      return res.send('User not found');
    }
    if (!req.body.password === emp.password) {
      res.status(401);
      return res.send('Wrong Password');
    }
    req.session.regenerate((err) => {
      if (err) {
        return res.serverError(err);
      }
      req.session.username = req.body.username;
      if (req.wantsJSON) {
        return res.status(200).json({
          username: req.session.username
        });
      }
      sails.log('Login successfully. \n Session: ' + JSON.stringify(req.session));
      return res.redirect('/');
    });
  },
  logout: async function (req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.serverError(err);
      }
      return res.redirect('/');
    });
  },
};
