// dependencies
var express = require('express');
var router = express.Router();
var isAuthenticated = require('../config/middleware/isAuthenticated');
var db = require("../models");
var passport = require("../config/passport");

//route to display home page (index)
router.get("/", function(req, res) {
  if (req.user) {
      res.redirect('/profile');
  }
  res.render("index");
});

//route to display profile page once authenticated
router.get('/profile', isAuthenticated, function(req, res) {
    res.render("profile");
});

//route used to authenticate user
router.post('/api/login', passport.authenticate("local"), function(req, res){
    res.json('/profile');
});

//route to log the user out
router.post('/logout', function(req, res) {
    req.logout();
    res.json('/');
});

router.get('/api/user_data', function(req, res) {
    if (!req.user) {
        res.json({});
    } else {
        db.User.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(user) {
            res.json(user);
        });
    }
});

// Export routes for server.js to use.
module.exports = router;