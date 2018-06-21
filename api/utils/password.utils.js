'use strict';
var bcrypt = require('bcryptjs');

exports.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

exports.compareHash = function(password, hash) {
    return bcrypt.compareSync(password, hash);
}
