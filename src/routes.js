const express = require('express');
const routes = express.Router();

routes.post('/users', async (request, response) => {
    const data = request.body;

    

    return response.json();
})

module.exports = routes;