// dependencies
var express = require('express');
var router = express.Router();
var isAuthenticated = require('../config/middleware/isAuthenticated');
var db = require("../models");
var passport = require("../config/passport");

router.get("/", function(req, res) {
  if (req.user) {
      res.redirect('/profile');
  }
  res.render("index");
});

router.get('/profile', isAuthenticated, function(req, res) {
        res.render("profile");
});


router.post('/api/login', passport.authenticate("local"), function(req, res){
    res.json('/profile');
});

//route to log the user out
router.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// Export routes for server.js to use.
module.exports = router;