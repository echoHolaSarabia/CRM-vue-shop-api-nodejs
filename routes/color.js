'use strict'

var express = require('express');
var ColorController = require('../controllers/color');

var api = express.Router();

api.get('/pruebas', ColorController.pruebas);

//Subimos colores
api.post('/color', ColorController.saveColor);

//Extraemos info en array json
api.get('/colors_json', ColorController.getColors);

//Extraemos info de un unico producto en array json
api.get('/color/:id', ColorController.getColor);

//Actualizamos un producto
api.put('/color_update/:id', ColorController.updateColor);

//borramos producto
api.delete('/color_delete/:id', ColorController.deleteColor);

module.exports = api;
