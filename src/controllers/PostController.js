const { sequelize } = require('../models');

const Post = sequelize.import('../models/post');
const sharp = require('sharp');
const path = require('path');
// File System
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const posts = await Post.findAll({ order: sequelize.literal('"createdAt" DESC') });
        return res.json(posts);
    },
    async store(req, res) {
        // console.table(req.body);
        // console.log(req.file);
        const { author, place, description, hashtags } = req.body;
        // pego finalename e renomeio para image
        const { filename: image } = req.file;
        const [name, ext] = image.split('.');
        const fileName = `${name}.jpg`

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(req.file.destination, 'resized', fileName)
            )

        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);

        return res.json(post);
    }
}