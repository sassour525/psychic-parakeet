var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

    //route to log the user in
    app.post('/api/login', passport.authenticate("local"), function(req, res){
        res.json('/profile');
    });

    //route to log the user out
    app.post('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //route to create a new user
    app.post('/api/signup', function(req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            company: req.body.comapny
        }).then(function() {
            res.redirect(307, '/');
        }).catch(function(err) {
            res.json(err);
        });;
    });

    app.get('/api/user_data', function(req, res) {
        console.log(req.body);
        db.User.findOne({
            where: req.body.name
        }).then(function(user) {
            res.json(user);
        });
    });

};