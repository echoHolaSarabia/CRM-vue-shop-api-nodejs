//Compatibilidad NodeJs con últimas versiones de JV (x si acaso)
'use strict'

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

var app = require('./app')
const config = require('./config')
//var port = 3890;
//app.set('port', process.env.PORT || 3800)



//Promise
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {useNewUrlParser: true})
//mongoose.connect('mongodb://localhost:27017/easy-notes', {useNewUrlParser: true})
//mongoose.connect('mongodb://heroku_tnsd7dsp:Htw555Htw555@ds347707.mlab.com:47707/heroku_tnsd7dsp', {useNewUrlParser: true})
//mongoose.connect('mongodb+srv://asterion:Htw555Htw555@vue-bbdd-erryf.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a MongoDB se ha realizado correctamente');

        //Viene de Express
        //app.listen(port, () => {
        //app.listen(app.get('port'), () => {
            //console.log(`El servidor está funcionando en localhost: ${config.port}`)
        //})
        app.listen(config.port, () => {
            console.log(`API REST corriendo en http://localhost:${config.port}`)
          })
    })
    .catch (err => console.log(err));