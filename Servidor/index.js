const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded(({extended:true})))
app.use(cors());

require('./routes')(app);


app.listen(9000, ()=>{
    console.log('El servidor esta activo en el puerto:9000');
})