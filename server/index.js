/* importar express para un servidor  que recarge los cambios en el proyecto, se puede hacer con node pero serían muchisimas lineas de codigo entonces por eso se hce con express*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
/* const db = require('./config/database'); */
require('dotenv').config({path: 'variables.env'})


/* esto solo fue para comprobar de inicio la conexion a la base de datos  */
/* db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error)); */

/* configurar express */
const app = express();



/* Habilitar pug */
app.set('view engine', 'pug');

/* Añadir las vistas cond path.join() le estamos diciendo con dirname que en esa misma carpeta en la carpeta views encontrara todo lo que procesara de pug*/
app.set('views', path.join(__dirname, './views'))

/* cargar una carpeta estatica llamada public */
app.use(express.static('public'))

/* Validar si estamos en desarrollo o produccion env es una variable en node para detectar el ambiente*/
const config = configs[app.get('env')]

/* Crear la variable para el sitio web */
app.locals.titulo = config.nombresitio;

/* Muestra el año actual, tuve un error de que no se ejecutaba, lo soluciona mandando cargar las rutas despues de esta funcion */
app.use((req, res, next) => {
/* Crear una nueva fecha */
    const fecha = new Date();
    /* para pasar informacion hacia nuestro template hay que crear locales, o variables locales, se logra con res.locals.nombreVariable = valor; */
    res.locals.fechaActual = fecha.getFullYear();
    /* Genera la ruta */
    res.locals.ruta = req.path;
    console.log(res.locals)
    /* este return es para que siga ejecutando la siguiente funcion en cuyo caso exista */
    return next();
})

/* Ejecutar el bodyParser */
app.use(bodyParser.urlencoded({extended: true}))

/* En los scripts para mandarlo ejecutar es "nombreScript": "nodemon server", donde nodemon es para reiniciar y detectar los cambios y server donde encontrara la configuracion del servidor */

/* Cargar las rutas */
app.use('/', routes());


/* Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
/* Heroku asignara esta variable del env */
const port = process.env.PORT || 3000
app.listen(port, host, () => {
    console.log('el servidor esta funcionado');
}); 