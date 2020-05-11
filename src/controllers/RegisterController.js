const jwt = require('jsonwebtoken');
const connection = require('../database/connection');

const userToken = require('../config/userToken');
const adminToken = require('../config/adminToken');

class RegisterController{
    async index(req,res){
        const data = await connection('users').select('*');

        return res.status(200).json(data);
    }
    
    async register(req,res){
        const { type, username, email, password } = req.body;

        if(type == "user"){
            await connection('users').insert({
                type,
                username,
                email,
                password,
            });

            return res.status(200).json({
                token: jwt.sign({ type }, userToken.secret, {
                 expiresIn: userToken.expiresIn,
                }),
                mensage: 'Usuario criado com sucesso!',
            })

        }
        if(type == "admin"){
            await connection('admin').insert({
                type,
                username,
                email,
                password,
            });

            return res.status(200).json({
                token: jwt.sign({ type }, adminToken.secret, {
                 expiresIn: adminToken.expiresIn
                }),
                mensage: 'Admin criado com sucesso!',
            })
        }else{
            res.status(401).json({error: 'Tipo de não encontrado! Controller'});
        }

    };
}

module.exports = new RegisterController();