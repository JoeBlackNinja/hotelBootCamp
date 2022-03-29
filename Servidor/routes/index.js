const LoginController = require('../controller/LoginController');
const CreateClient = require('../controller/CreateClient');
const CreateReservation = require('../controller/CreateReservation');

module.exports = (app) => {
    app.get('/api',(req,res) => {
        res.status(200).send('Mensaje enviado desde método GET');
    })
    //NUEVO CLIENTE
    app.post('/client/newClient/name/:name/last_name/:last_name/address/:address/city/:city'+
                '/state/:state/country/:country/cellphone/:cellphone/email/:email'+
                '/account_type/:account_type', CreateClient.newClient);

    //NUEVA RESERVACION
    app.post('/reservations/id_type_room_fk/:id_type_room_fk/reservation_date/:reservation_date'+
                'time/:time/ingress_date/:ingress_date/out_date/:out_date/cash/:cash'+
                'transaction_number/:transaction_number/total/:total',CreateReservation.newReservations);



    /* app.post('/user/create/userName/:userName/password/:password',
        LoginController.createUsuario);
    
    app.get('/user/list', LoginController.list);

    app.get('/user/finduser/id/:id',
        LoginController.findUser); */



}
