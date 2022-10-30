const User = require("../model/user");

const follow = async (req, res) => {
  try {
    if (req.params.id === req.id) {
      return res.status(400).json({ message: "You cannot follow yourself" });
    }
    let userToFollow = await User.findById(req.params.id);
    if (!userToFollow) {
      return res
        .status(404)
        .json({ message: `User not found with id ${req.params.id}` });
    }
    await User.findByIdAndUpdate(req.id, {
      $addToSet: { following: req.params.id },
    }).then(console.log("User followed with id: ", req.params.id));
    await User.findByIdAndUpdate(req.params.id, {
      $addToSet: { followers: req.id },
    }).then(console.log("User followed with id: ", req.id));
    res.json({ message: "User followed" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const unFollow = async (req, res) => {
  try {
    if (req.params.id === req.id) {
      return res.status(400).json({ message: "You cannot unfollow yourself" });
    }
    let userToUnFollow = await User.findById(req.params.id);
    if (!userToUnFollow) {
      return res
        .status(404)
        .json({ message: `User not found with id ${req.params.id}` });
    }
    await User.findByIdAndUpdate(req.id, {
      $pull: { following: req.params.id },
    }).then(console.log("User unFollowed with id: ", req.params.id));
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { followers: req.id },
    }).then(console.log("User unFollowed with id: ", req.id));
    res.json({ message: "User unFollowed" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { follow, unFollow };
