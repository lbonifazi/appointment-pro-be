'use strict';

var mongoose = require('mongoose'),
passwordUtility = require('../utils/password.utils'),
UserDB = mongoose.model('User');

exports.getAll = function(req, res) {
    UserDB.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.new = function(req, res) {
    var new_user = new UserDB(req.body);
    new_user.password = passwordUtility.encrypt(new_user.password);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get = function(req, res) {
    UserDB.findById(req.params.UserId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};  

exports.update = function(req, res) {
    UserDB.findOneAndUpdate({_id:req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function(req, res) {
    UserDB.remove({
        _id: req.params.UserId
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User {$1} successfully deleted', user });
    });
};