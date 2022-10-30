const Post = require("../model/post");
const User = require("../model/user");


const getSinglePost = async (req, res) => {
    try {
      let post = await Post.findById(req.params.id);
      let author = await User.findById(post.owner);
      res.json({
        Title: post.title,
        Description: post.description,
        Likes: post.likes.length,
        Comments: post.comments,
        Author: author.username,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  module.exports = { getSinglePost };