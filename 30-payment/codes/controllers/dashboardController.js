let controller = require("./controller");
const User = require("./../models/user");

const { validationResult } = require("express-validator");

module.exports = new class dashboardController extends controller {
  async index(req, res, next) {
    try {
      res.render('dashboard/index')
    } catch (err) {
      next(err);
    }
  }

  async pay(req, res, next) {
    try {
      console.log('pay')
    } catch (err) {
      next(err);
    }
  }

  async edituser(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let myErrors = errors.array().map(err=>err.msg);
        req.flash("errors", myErrors);
        return res.redirect("/dashboard");
      }
      let data ={
        name : req.body.name,
      }
      console.log(req.file.path);
      if(req.file){
        data.img = req.file.path.replace(/\\/g,'/').substring(6)
      }

      await User.updateOne({_id : req.user.id} , {$set : data})
      res.redirect('/dashboard');
    } catch (err) {
      next(err);
    }
  }

  

}


