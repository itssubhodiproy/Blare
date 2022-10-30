const Post = require("../model/post");

const likePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.json({ message: "Post not found" });
    }
    if (post.likes.includes(req.id)) {
      return res.json({ message: "You already liked this post" });
    }
    await Post.findByIdAndUpdate(req.params.id, {
      $addToSet: { likes: req.id },
    }).then(console.log("User liked the post with id: ", req.params.id));
    res.json({ message: "Post liked" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const disLikePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.json({ message: "Post not found" });
    }
    if (!post.likes.includes(req.id)) {
      return res.json({ message: "You didn't liked this post earlier" });
    }
    await Post.findByIdAndUpdate(req.params.id, {
      $pull: { likes: req.id },
    }).then(console.log("You disliked the post with id: ", req.params.id));
    res.json({ message: "Post Disliked" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { likePost, disLikePost };
