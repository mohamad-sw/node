const express = require("express");
const router = express.Router();

//controllers
const dashboardController =  require('controllers/dashboardController');

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
})

router.get("/",  dashboardController.index );




module.exports = router;
