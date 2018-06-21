'use strict';

var mongoose = require('mongoose'),
passwordUtility = require('../utils/password.utils'),
UserDB = mongoose.model('User');

exports.login = function(req, res) {
    UserDB.findOne({_id:req.params.userId}, function(err, user) {
        if (err)
            res.send(err);
        var result = passwordUtility.compareHash(req.params.password, user.password)
        res.json(result);
    });
};