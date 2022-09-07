const express = require('express');
const rotaPrincipal = require('./routes/rotaPrincipal');
const rotaItens = require('./routes/rotaItens');

const app = express();

app.use(express.json());
app.use('/', rotaPrincipal);
app.use('/itens', rotaItens);

module.exports=app;