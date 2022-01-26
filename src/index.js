const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());

//configuracion
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
require('../configuracion/basededatos');
//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//definicion de rutas
app.use('/api/datos',require('./routes/index'));
app.use('/api/creaempleado',require('./routes/routesempleados'));
app.use('/api/creainvitado',require('./routes/routesinvitado'));
//iniciando servidor
app.listen(app.get('port'),()=>{
    //Codigo ascii de backsitck alt mas 96
    console.log('el archivo esta en el puerto ${4000}')
    });
