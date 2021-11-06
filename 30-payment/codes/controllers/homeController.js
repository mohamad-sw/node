let controller = require("./controller");
const User = require("./../models/user");

const { validationResult } = require("express-validator");

module.exports = new class dashboardController extends controller {
  async paycallback(req, res, next) {
    try {
      console.log('callback')
    } catch (err) {
      next(err);
    }
  }



}


