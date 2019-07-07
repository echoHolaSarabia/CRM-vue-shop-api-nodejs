'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
const auth = require('../middlewares/auth')
//const userCtrl = require('../controllers/user')

var api = express.Router();

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


//usuarios
//api.post('/signup', userCtrl.signUp)
//api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})
module.exports = api;
