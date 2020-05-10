const express = require('express');

const registerRoutes = require('./routes/registerRoutes');

class App{
    constructor(){
        this.server = express();
        this.server.use(express.json());

        this.routes();
        this.protectedRoutes();


    }

    routes(){
        this.server.use(registerRoutes);
    }

    protectedRoutes(){

    }
}
