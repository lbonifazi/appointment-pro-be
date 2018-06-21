'use strict';

module.exports = function(app) {
	var userController = require('../controllers/user.controller');
	var loginController = require('../controllers/login.controller');

	app.route('/users')
		.get(userController.getAll)
		.post(userController.new);

	app.route('/users/:userId')
		.get(userController.get)
		.put(userController.update)
		.delete(userController.delete);

	app.route('/login/:userId&:password')
		.get(loginController.login)
};