const express = require('express');
const postControllers = require('../controllers/postController');
const router = express.Router();

//@route GET && POST /post/
router
    .route('/')
    .get(postControllers.getAllPosts)
    .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById);

module.exports = router;