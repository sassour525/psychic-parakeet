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
    db.User.findOne({
        where: {
            id: req.user.id
        },
        raw: true,
        include: [db.Shift, db.Availability]
    }).then(function(user) {
        console.log(user);
        res.render("profile", {user: user});
    });
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

//route to get shifts
router.get('/api/shifts', function(req, res) {
    if (!req.user) {
        res.json({});
    } else {
        db.Shift.findAll({
            where: {
                userId: req.user.id
            }
        }).then(function(shifts) {
            res.json(shifts);
        });
    }
});

//get user data for use on the frontend
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