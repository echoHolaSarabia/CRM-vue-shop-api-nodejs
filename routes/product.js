'use strict'

var express = require('express');
var ProductController = require('../controllers/product');

var api = express.Router();

api.get('/pruebas', ProductController.pruebas);

//Subimos productos
api.post('/product', ProductController.saveProduct);

//Extraemos info en array json
api.get('/products_json', ProductController.getProducts);

//Extraemos info de un unico producto en array json
api.get('/product/:id', ProductController.getProduct);

//Actualizamos un producto
api.put('/product_update/:id', ProductController.updateProduct);

//borramos producto
api.delete('/product_delete/:id', ProductController.deleteProduct);


module.exports = api;
