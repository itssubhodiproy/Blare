const Post = require("../model/post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ owner: req.id });
    if (posts.length === 0) return res.json({ message: "No posts found" });
    let postsArray = [];
    for (let i = 0; i < posts.length; i++) {
      let { title, description, likes, comments, createdAt, owner } = posts[i];
      let temp = {
        Title: title,
        Description: description,
        Likes: likes.length,
        Comments: comments,
        Date: createdAt.toLocaleDateString(),
        Time: createdAt.toLocaleTimeString(),
        Author: owner,
      };
      postsArray.push(temp);
    }
    res.status(200).json(postsArray);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPosts };
