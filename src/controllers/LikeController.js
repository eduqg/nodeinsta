const { sequelize } = require('../models');

const Post = sequelize.import('../models/post');

module.exports = {
    async store(req, res) {
        const post = await Post.findByPk(req.params.id);
        post.likes += 1;
        await post.save();
        req.io.emit('like', post);
        return res.json(post);
    }
}