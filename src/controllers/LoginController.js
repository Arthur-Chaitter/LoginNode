const jwt = require('jsonwebtoken');

const userToken = require('../config/userToken');

const connection = require('../database/connection');

class LoginController{
    async index(req,res){
        let { type, email } = req.body;

        //achar validaçao para a senha
        if(type == "user"){
            const user = await connection('users')
             .where('email',email)
             .select('email','password')
             .first();

            if(!user){
                res.status(404).json({error: 'Usuario não encontrado!'});
            }

            return res.status(200).json({
                token: jwt.sign({ user }, userToken.secret, {
                    expiresIn: userToken.expiresIn
                }),
                mensage: 'User Token!'
            });
        }

    }
}

module.exports = new LoginController();