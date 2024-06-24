const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostWithComments);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;