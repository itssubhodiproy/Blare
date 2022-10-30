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

  // //if passed id's user is valid or not
  // let userToFollow = await User.findById(req.params.id);
  // if (!userToFollow) {
  //   return res.status(404).json({ message: `User not found with id ${req.params.id}` });
  // }
  // // push the id into the following array of the user
  // await User.findByIdAndUpdate(req.id, {
  //   $addToSet: { following: req.params.id },
  // }).then(console.log("User followed with id: ", req.params.id));
  // //push the id into the followers array of the user to follow
  // await User.findByIdAndUpdate(req.params.id, {
  //   $addToSet: { followers: req.id },
  // }).then(console.log("User followed with id: ", req.id));

  // res.json({ message: "User followed" });


app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
