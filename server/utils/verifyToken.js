const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // console.log(req.hostname);
  console.log(req.headers);
  console.log(`The client's IP Address is: ${req.socket.remoteAddress}`);
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    console.log("no token");
    next();
  }
};
