// dependencies
var express = require('express');
var router = express.Router();
var isAuthenticated = require('../config/middleware/isAuthenticated');
var db = require("../models");
var passport = require("../config/passport");

//route to display home page (index)
router.get("/", function (req, res) {
  if (req.user) {
    res.redirect('/profile');
  }
  res.render("index");
});

//route to display profile page once authenticated
router.get('/profile', isAuthenticated, function (req, res) {
  db.User.findOne({
    where: {
      id: req.user.id
    },
    raw: true,
    include: [db.Shift, db.Availability]
  }).then(function (user) {
    console.log(user);
    res.render("profile", { user: user });
  });
});

//route used to authenticate user
router.post('/api/login', passport.authenticate("local"), function (req, res) {
  res.json('/profile');
});

//route to log the user out
router.post('/logout', function (req, res) {
  req.logout();
  res.json('/');
});

//route to get shifts
router.get('/api/shifts', function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    db.Shift.findAll({
      where: {
        userId: req.user.id
      }
    }).then(function (shifts) {
      res.json(shifts);
    });
  }
});

//    GET ALL SHITFS
//------------------------
//route to get ALL shifts (for manager)
router.get('/api/shifts_all', function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    db.Shift.findAll({}).then(function (shifts) {
      res.json(shifts);
    });
  }
});


//route to update availability
router.put("/api/availability", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    console.log(req.body);
    var availability = req.body
    db.Availability.update({
      monday_Morn: availability.monMorn, 
      monday_Eve: availability.tueMorn, 
      tuesday_Morn: availability.wedMorn, 
      tuesday_Eve: availability.thurMorn, 
      wednesday_Morn: availability.friMorn, 
      wednesday_Eve: availability.monAn, 
      thursday_Morn: availability.tueAn, 
      thursday_Eve: availability.wedAn, 
      friday_Morn: availability.thurAn, 
      friday_Eve: availability.friAn
    }, {
      where: {
        UserId: req.user.id
      }
    }).then(function (result) {
      res.json(result);
    });
  }
});

//route to update shifts
router.put("/api/shift_update", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    console.log(req.body);
    var shifts = req.body
    var i = 1;
    for (var prop in shifts) {
      console.log("UserID:" + shifts[prop]);
      console.log(i);
      db.Shift.update({
        UserId: shifts[prop]
      }, {
        where: {
          id: i
        }
      }).then(function (result) {
        res.json(result);
      });
      i++;
    }
  }
});

//get all user objects
router.get('/api/all_users', function(req, res) {
   if (!req.user) {
    res.json({});
  } else {
    db.User.findAll({
      include: [db.Availability]
    }).then(function(users) {
      res.json(users);
    });
  }
});


//get user data for use on the frontend
router.get('/api/user_data', function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (user) {
      res.json(user);
    });
  }
});

// Export routes for server.js to use.
module.exports = router;