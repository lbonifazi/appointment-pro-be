'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    dni: {
        type: Number,
        required: 'The dni is required'
    },
    firstName: {
        type: String,
        required: 'The first name is required'
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: 'The last name is required'
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: [{
            type: String,
            enum: ['male', 'female']
        }],
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: 'active',
    },
});

module.exports = mongoose.model('User', userSchema);