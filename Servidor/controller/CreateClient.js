const client = require('../models').client;

module.exports = {
    newClient(req,res){
        return client.create({
            name:req.params.name,
            last_name:req.params.last_name,
            address:req.params.address,
            city:req.params.city,
            state:req.params.state,
            country:req.params.country,
            cellphone:req.params.cellphone,
            email:req.params.email,
            account_type:req.params.account_type
        }).then(usuario => res.status(200).send(usuario))
          .catch(error => res.status(400));
    }
}