const express = require('express');
const routes = require('./routes')
const path = require('path')

// crear una app de express

const app= express();

// donde cargar los archivos estaticos

app.use(express.static('public'))

// habiltiar pug
app.set('view engine', 'pug');

// añadir la carpeta de las vistas

app.set('views', path.join(__dirname, './views'))

// ruta home

app.use('/', routes())

app.listen(4000);