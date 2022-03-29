const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;

module.exports = {
    createUsuario(req,res){
        return usuario.create({userName: req.params.userName, 
            password: req.params.password})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400));
    },
    list(_, res)
    {
        return usuario.findAll({}).then(usuario => res.status(200).send(usuario))
                                .catch(error => res.status(400).send(error));
    },
    findUser(req,res)
    {
        return usuario.findAll({
            where: {
                id: req.params.id,
            }
        }).then(usuario => res.status(200).send({usuario}))
            .catch(error => res.status(400).send(error));
    }
}