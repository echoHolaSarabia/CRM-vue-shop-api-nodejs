'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = Schema({
    //Definimos campos
    name: String,
    picture: String,
    id: Number
});

module.exports = mongoose.model('Category', CategorySchema)