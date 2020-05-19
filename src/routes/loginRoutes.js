const { Router } = require('express');

const LoginController = require('../controllers/LoginController');
const LoginValidations = require('../validations/LoginValidations');

const LoginRoutes = new Router();

LoginRoutes.post('/login', LoginValidations.index ,LoginController.index);

module.exports = LoginRoutes;