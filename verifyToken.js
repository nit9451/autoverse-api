
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.userId = decoded.id;
      next();
    });
  }

  module.exports.verifyToken = verifyToken;
