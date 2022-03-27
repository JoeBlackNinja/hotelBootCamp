const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded(({extended:true})))

require('./routes')(app);

app.listen(9000, ()=>{
    console.log('El servidor esta activo en el puerto:9000');
})