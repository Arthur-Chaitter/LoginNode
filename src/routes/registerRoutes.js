const { Router } = require('express');

const RegisterController = require('../controllers/RegisterController');
const RegisterValidations = require('../validations/RegisterValidations');

const registerRoutes = new Router();

registerRoutes.get('/all', RegisterController.index);

registerRoutes.post('/register', RegisterValidations.index , RegisterController.register);


module.exports = registerRoutes;