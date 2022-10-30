const Post = require("../model/post");

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(404)
        .json({ message: `Post not found with id ${req.params.id}` });
    }
    if (post.owner == req.id) {
      await post.delete();
      res.json({ message: "Post deleted" });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { deletePost };


