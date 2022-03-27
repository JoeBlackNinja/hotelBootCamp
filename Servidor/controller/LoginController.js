const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;

module.exports = {
    create(req,res){
        return usuario.create({userName: req.params.userName, 
            password: req.params.password})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400));
    }
}