const Post = require("../model/post");

const commentPost = async (req, res) => {
  try {
    const { comment } = req.body;
    await Post.findByIdAndUpdate(req.params.id, {
      $push: { comments: comment },
    }).then(console.log("Comment added"));
    res.json({
      message: `${comment} --> comment added into the post with id ${req.params.id}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { commentPost };
