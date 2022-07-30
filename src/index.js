const express = require('express');
const app = express();
const morgan = require ('morgan');
const port = 3000;

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routers
app.use(require('./router/routers'));

app.listen(port, ()=>{
    console.log( `corriendo por el puerto ${port} y en localhost`);
})