//Compatibilidad NodeJs con últimas versiones de JV (x si acaso)
'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = 3800;

//Promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/easy-notes', {useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a MongoDB se ha realizado correctamente');

        //Viene de Express
        app.listen(port, () => {
            console.log('El servidor está funcionando en localhost:3800')
        })
    })
    .catch (err => console.log(err));