const express = require("express");
const app = express();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model/user");
const { tokenGenerate } = require("./controller/generateToken");
const { auth } = require("./controller/auth");
const { follow, unFollow } = require("./controller/followUnfollow");
const { userProfile } = require("./controller/userProfile");
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });
// Middleware
app.use(express.json());

app.get("/", auth, (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/authenticate", tokenGenerate);
app.post("/api/follow/:id", auth, follow);
app.post("/api/unfollow/:id", auth, unFollow);
app.get("/api/users", auth, userProfile);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
