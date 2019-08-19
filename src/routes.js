const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();

// image refere ao campo da tabela Posts
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;