const reservation = require('../models').reservation;

module.exports = {
    newReservations(){
        return reservation.create({
            
        })
    }
}