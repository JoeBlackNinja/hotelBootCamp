const get_ = require('../get_');

module.exports = app => {
    app.get('/',get_.bienvenida)
}