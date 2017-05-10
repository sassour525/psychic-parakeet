// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // if logged in - direct to profile page
  if (req.user) {
    return next();
  }

  // redirect to index if not logged in
  return res.redirect("/");
};