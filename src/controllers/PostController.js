const Post = require('../models/post');

module.exports = {
    async index(req, res) {

    },
    async store(req, res) {
        console.table(req.body);
        console.log(req.file);
        return res.json({ok: true});
    }
}