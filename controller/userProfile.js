const User = require("../model/user");

const userProfile = async (req, res) => {
  try {
    let user = await User.findById(req.id);
    let followingCount = user.following.length;
    let followersCount = user.followers.length;
    res.json({
      username: user.username,
      following: followingCount,
      followers: followersCount
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { userProfile };