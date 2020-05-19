const { Router } = require('express');

const LoginController = require('../controllers/LoginController');

const LoginRoutes = new Router();

LoginRoutes.post('/login', LoginController.index);

module.exports = LoginRoutes;