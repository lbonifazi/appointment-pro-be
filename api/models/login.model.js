'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    dni: {
        type: Number,
        required: 'The dni is required'
    },
    password: {
        type: String,
        required: 'The first name is required'
    },
});

module.exports = mongoose.model('User', userSchema);