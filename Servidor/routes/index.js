const LoginController = require('../controller/LoginController');

module.exports = (app) => {
    app.get('/api',(req,res) => {
        res.status(200).send('Cantilever... desde método GET');
    })

    app.post('/user/create/userName/:userName/password/:password',
        LoginController.create);
}
