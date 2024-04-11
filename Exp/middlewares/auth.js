// a example only
function auth(req, res, next) {
  console.log("authenticating");
  next(); //this moves operations to next middleware function
}

module.exports = auth;
