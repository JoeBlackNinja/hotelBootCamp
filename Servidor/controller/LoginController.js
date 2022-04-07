const usuario = require('../models').client;

module.exports = {
    createUsuario(req,res){
        return usuario.create({email: req.params.email, 
            pass: req.params.pass})
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