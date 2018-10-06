const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const postRoute = require('./routes/postRoutes');

app.use('/', index);
app.use('/post', postRoute);

module.exports = app; 
