const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  following: [String],
  followers: [String],
  posts: [String],
  likedPosts: [String],
});

module.exports = mongoose.model("User", UserSchema);