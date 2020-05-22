const connection = require('../database/connection');
const bcrypt = require('bcrypt');


class RegisterController{
    async index(req,res){
        const data = await connection('users').select('*');

        return res.status(200).json(data);
    }
    
    async register(req,res){
        const { type, username, email } = req.body;

        try{
            if(type == "user"){
                const password = await bcrypt.hash(req.body.password,10);

                console.log(password);
                await connection('users').insert({
                    type,
                    username,
                    email,
                    password,
                });

                return res.status(200).json({
                    mensage: 'Usuario criado com sucesso!'
                })
            }

            if(type == "admin"){
                const password = await bcrypt.hash(req.body.password,15);

                console.log(password);

                await connection('admin').insert({
                    type,
                    username,
                    email,
                    password,
                });
    
                return res.status(200).json({
                    mensage: 'Admin criado com sucesso!'
                })
            }

        }catch{
            res.status(500).json({error: 'Erro ao criar!'});
        }

    };
}

module.exports = new RegisterController();