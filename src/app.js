//modulos//
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyparser = require('body-parser');

const app = express();
//modulos//


// importando Rutas
const CustomerRoutes = require('./routes/customers');

// importando Rutas



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // motor de plantillas



// middlewares antes del sistema de peticiones o routes
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'asdasd',
    port:3306,
    database: 'crudnodejsmysql'
}, 'single' ));
app.use(bodyparser.urlencoded({extended:true})); //urlencoded ahora ya viene integrado en express
app.use(bodyparser.json());


// routes del servidor
app.use('/', CustomerRoutes);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})