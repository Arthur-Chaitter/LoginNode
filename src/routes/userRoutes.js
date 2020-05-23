const { Router } = require('express');

const SessionController = require('../controllers/SessionController');

const UserRoutes = new Router();

UserRoutes.get('/Session',SessionController.index);

module.exports = UserRoutes;