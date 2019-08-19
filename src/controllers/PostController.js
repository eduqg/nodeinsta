const Post = require('../models/post');

module.exports = {
    async index(req, res) {

    },
    async store(req, res) {
        return res.json({ok: true});
    }
}