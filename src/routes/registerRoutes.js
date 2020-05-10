const { Router } = require('express');

const RegisterController = require('../controllers/RegisterController');

const connection = require('../database/connection');

const registerRoutes = new Router();

registerRoutes.get('/all', RegisterController.index);

registerRoutes.post('/register', RegisterController.register);


module.exports = registerRoutes;