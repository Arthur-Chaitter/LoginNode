const { Router } = require('express');

const SessionController = require('../controllers/SessionController');

const SessionAlth = require('../middlewares/SessionAlth');

const UserRoutes = new Router();

UserRoutes.get('/Session', SessionAlth ,SessionController.index);

module.exports = UserRoutes;