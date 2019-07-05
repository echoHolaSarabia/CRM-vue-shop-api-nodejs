'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = Schema({
    //Definimos campos
    name: String,
    css: String,
    id: Number
});

module.exports = mongoose.model('Color', ColorSchema)