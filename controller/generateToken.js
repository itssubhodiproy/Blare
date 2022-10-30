const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const tokenGenerate = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username: username,
    password: hashedPassword,
  }).then(console.log("User created"));
  const token = jwt.sign(
    { username: user.username, id: user.id },
    process.env.ACCESS_TOKEN_SECRET
  );
  res.json({ Token: token });
};

module.exports = { tokenGenerate };
