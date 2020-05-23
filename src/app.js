const express = require('express');

const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

class App{
    constructor(){
        this.server = express();
        this.server.use(express.json());

        this.routes();
        this.protectedRoutes();


    }

    routes(){
        this.server.use(registerRoutes);
        this.server.use(loginRoutes);
    }

    protectedRoutes(){
        this.server.use(userRoutes);
    }
}

module.exports = new App().server;
