const LoginController = require('../controller/LoginController');

module.exports = (app) => {
    app.get('/api',(req,res) => {
        res.status(200).send('Mensaje enviado desde método GET');
    })

    app.post('/user/create/userName/:userName/password/:password',
        LoginController.createUsuario);
    
    app.get('/user/list', LoginController.list);

    app.get('/user/finduser/id/:id',
        LoginController.findUser);



}
