
class SessionController{
    async index(req,res){
        return res.status(200).json({mesage: 'Bem Vindo Usuario'});
    }
}

module.exports = new SessionController();