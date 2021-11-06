let controller = require("./controller");
const User = require("./../models/user");

const { validationResult } = require("express-validator");

class UserController extends controller {
  async registerForm(req, res, next) {
    try {
      res.render('auth/register' )
   
    } catch (err) {
      next(err);
    }
  }


  async loginForm(req, res, next) {
    try {
      res.render('auth/login' )
   
    } catch (err) {
      next(err);
    }
  }

  async register(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let myErrors = errors.array().map(err=>err.msg);
        req.flash("errors", myErrors);
        return res.redirect("/auth/register");
      }
      console.log('register')
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let myErrors = errors.array().map(err=>err.msg);
        req.flash("errors", myErrors);
        return res.redirect("/auth/login");
      }
      console.log('login')
   
    } catch (err) {
      next(err);
    }
  }


}

module.exports = new UserController();
