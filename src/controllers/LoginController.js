class LoginController{
    index(req,res){
        return res.status(200).json({mensage: 'Login Realizado!'});
    }
}

module.exports = new LoginController();