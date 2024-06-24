const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/comments', commentController.createComment);
router.get('/posts/:postId/comments', commentController.getCommentsForPost);

module.exports = router;
