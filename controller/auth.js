const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      let user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.username = user.username;
      req.id = user.id;
    } else {
      return res.sendStatus(401).json({ message: "Token not found" });
    }
    next();
  } catch (error) {
    res.sendStatus(403).json({ message: "Invalid token" });
  }
};

module.exports = { auth };
