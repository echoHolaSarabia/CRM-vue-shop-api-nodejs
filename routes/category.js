'use strict'

var express = require('express');
var CategoryController = require('../controllers/category');

var api = express.Router();

//Subimos 
api.post('/category', CategoryController.saveCategory);

//Extraemos info en array json
api.get('/categories_json', CategoryController.getCategories);

//Extraemos info de un unico producto en array json
api.get('/category/:id', CategoryController.getCategory);

//Actualizamos un producto
api.put('/category_update/:id', CategoryController.updateCategory);

//borramos producto
api.delete('/category_delete/:id', CategoryController.deleteCategory);

module.exports = api;
