const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
    try {
        let [posts, _] = await Post.findAll();

        res.status(200).json({ count: posts.length, posts });
    } catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createNewPost = async (req, res, next) => {
    try {
        let { title, body } = req.body;
        let post = new Post(title, body);

        post = await post.save();

        res.status(201).json({ message: "New Post created" });
    } catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        // let { id } = req.key;
        let { id } = req.params;
        let [post, _] = await Post.findById(id);

        res.status(200).json({ post: post[0] });
    } catch (e) {
        console.log(e);
        next(e);
    }

    // let post = await Post.findById(id)

}

