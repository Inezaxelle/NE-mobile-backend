const { Post, Comment } = require('../models');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

// Get a single post by ID and its comments
exports.getPostWithComments = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: [{ model: Comment, as: 'comments' }]
    });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve post' });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const rowsDeleted = await Post.destroy({ where: { id: req.params.id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(204).json({rowsDeleted: rowsDeleted});
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
