const { sequelize } = require('../models');

const Post = sequelize.import('../models/post');

module.exports = {
    async index(req, res) {

    },
    async store(req, res) {
        // console.table(req.body);
        // console.log(req.file);
        const { author, place, description, hashtags } = req.body;
        // pego finalename e renomeio para image
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });

        return res.json(post);
    }
}