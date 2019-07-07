'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

var app = express();

//Configurar CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
  });

//cargamos rutas
var products_router = require('./routes/product');
var categories_router = require('./routes/category');
var colors_router = require('./routes/color');

//body-parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas base
app.use('/api', products_router)
app.use('/api', categories_router)
app.use('/api', colors_router)


module.exports = app;