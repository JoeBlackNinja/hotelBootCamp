
module.exports = (app) => {
    app.get('/api',(req,res) => {
        res.status(200).send('Cantilever... desde método GET');
    })
}
