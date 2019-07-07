'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    //Definimos campos
    name: String,
    picture: String,
    price: Number,
    stock: Number,
    category: Number,
    color: Array,
    actions: Number,
    id: Number,
    descrip_esp: String,
    descrip_eng: String,
    descrip_grm: String

});

module.exports = mongoose.model('Product', ProductSchema)