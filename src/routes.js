const express = require('express');

const routes = new express.Router();

// Middleware que intercepta requisição na rota raiz
routes.get('/', (req, res) => {
    return res.send('Hello World');
});

module.exports = routes;