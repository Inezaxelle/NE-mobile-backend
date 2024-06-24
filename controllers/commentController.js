const { Comment, Post } = require('../models');

// Create a new comment
exports.createComment = async (req, res) => {
    const { postId, name, email, body } = req.body;
  
    try {
      // Check if the postId exists
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Create the comment
      const comment = await Comment.create({
        postId,
        name,
        email,
        body
      });
  
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create comment' });
      console.log(error);
    }
  };

// Get all comments for a post
exports.getCommentsForPost = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { postId: req.params.postId } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};
