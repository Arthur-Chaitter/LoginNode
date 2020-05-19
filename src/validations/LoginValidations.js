const Joi = require('@hapi/joi');

class LoginValidation{
    async index(req,res,next){
        const schema = Joi.object({
            type: Joi.string()
                .required(),

            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
             
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
        });

        const value = await schema.validate(req.body);

        if(value.error){
            res.status(401).json({error: 'Erro de validação!'})
        }else{
            return next();
        }
    };

};

module.exports = new LoginValidation();