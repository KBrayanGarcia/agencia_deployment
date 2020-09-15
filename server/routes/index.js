const express = require('express');
const router = express.Router();

/* al trabajar con modelos y sequelize te van a retornar un (promise aunque ya se puede aplicar async await) estos ya no se mandan llamar aqui, si no en los controllers */
/* const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales'); */

/* Esto sirve para dividir el MVC de las rutas */
const nosotrosConstroller = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
/* app.use responde a todos los metodos de put, delete, create, get, mientras que app.get solo responde al get */
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosConstroller.infoNosotros);
    router.get('/viajes',viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    /* Cuando se llena el formulario */
    router.post('/testimoniales', testimonialesController.enviarTestimonial);
    
    return router;
}