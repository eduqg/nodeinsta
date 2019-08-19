const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').server(app);
// io permite enviar informações para usuários da aplicação
const io = require('socket.io')(server);

// A partir de agora todos os middlewares terão acesso a io
app.use((req, res, next)=>{
    req.io = io
    next();
});

// Posso configurar origin*
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'));

server.listen(3333);