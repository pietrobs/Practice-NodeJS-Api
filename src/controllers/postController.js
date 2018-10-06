exports.get = (req, res) => {
    let Post = require('../models/postModel');

    Post
        .find()
        .exec((err, posts) => {
            if (!err) {
                res.json({
                    success: true,
                    message: "Posts buscados com sucesso!",
                    posts
                });
            } else {
                res.json({
                    success: false,
                    message: err.message,
                    posts: []
                });
            }
        });
}


exports.post = async (req, res) => {
    let Post = require('../models/postModel');
    try {
        console.log(req.body);
        Post = new Post({ 
            title: req.body.title,
            description: req.body.description,
            created_by: 1
        });

        let savedPost = await Post.save();

        res.json({
            success: true,
            message: "Post inserido com sucesso!",
            post: savedPost
        })

    } catch (err) {

        res.json({
            success: false,
            message: err.message,
        })
    }
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};


exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};