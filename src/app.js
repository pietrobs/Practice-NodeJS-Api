const express = require('express');

const app = express();
const router = express.Router();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rotas
const index = require('./routes/index');
const postRoute = require('./routes/postRoutes');

app.use('/', index);
app.use('/post', postRoute);

let mongoose = require('mongoose');

mongoose.connect(
    'mongodb://admin:node123@ds125912.mlab.com:25912/cursonode_pietro',
    { useNewUrlParser: true }
);

module.exports = app; 
