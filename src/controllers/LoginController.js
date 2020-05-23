const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt');

const userToken = require('../config/userToken');
const connection = require('../database/connection');

class LoginController{
    async index(req,res){
        let { type, email } = req.body;

        if(type == "user"){
            try{
                const user = await connection('users')
                     .where('email',email)
                     .select('email')
                     .first();
                
                if(!user){
                    return res.status(400).json({error: 'Usuario não encontrado'});
                }

                const userPassword = await connection('users')
                 .where('email',email)
                 .select('password')
                 .first();

                if(await bcrypt.compare(req.body.password, userPassword.password)){
                    return res.status(200).json({
                        //userPassword usado somente como teste
                        token: jwt.sign({ user, userPassword }, userToken.secret, {
                         expiresIn: userToken.expiresIn
                        }),
                        mensage: 'User Token!'
                    })
                }else{
                     res.status(401).json({mensage: 'Senha Incorreta'});
                }
                 
            }catch{
                return res.status(500).json({error: 'Error Controller'});
            }
        }

    }
}

module.exports = new LoginController();