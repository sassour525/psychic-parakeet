// var path = require('path');
// //custom middleware for checking if a user is logged in
// var isAuthenticated = require('../config/middleware/isAuthenticated');

// module.exports = function(app) {
//     //route to serve the index page
//     app.get('/', function(req, res) {
//         if (req.user) {
//             res.redirect('/profile');
//         }
//         res.sendFile(path.join(__dirname + '/../views/index.html'));
//     });

//     //route to serve the register page
//     app.get('/register', function(req, res) {
//         if (req.user) {
//             res.redirect('/profile')
//         }
//         res.sendFile(path.join(__dirname + '/../views/register.html'))
//     });

//     //route to serve the profile page (specific to the logged in user)
//     app.get('/profile', isAuthenticated, function(req, res) {
//         res.sendFile(path.join(__dirname + '/../views/profile.html'));
//     });

//     //route to serve the company page
//     app.get('/company', isAuthenticated, function(req, res) {
//         res.sendFile(path.join(__dirname + '/../views/company.html'));
//     });
// }