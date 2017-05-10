var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// use a Local Strategy. login with a username/email and password
passport.use(new LocalStrategy(
  // sign in using an email
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If email does not match any users in DB
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // if email matches but password does not
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // if there are no matches
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;