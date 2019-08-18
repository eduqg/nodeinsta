const express = require('express');

const app = express();

// Middleware que intercepta requisição na rota raiz
app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3333);