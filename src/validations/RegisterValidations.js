const Joi = require('@hapi/joi');

class RegisterValidation{
    async index(req,res,next){
        const schema = Joi.object({
            type: Joi.string()
                .required(),
            
            username: Joi.string()
                .alphanum()
                .min(2)
                .max(10)
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

module.exports = new RegisterValidation();