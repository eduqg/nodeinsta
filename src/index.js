const express = require('express');
const path = require('path');

const app = express();

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'));

app.listen(3333);