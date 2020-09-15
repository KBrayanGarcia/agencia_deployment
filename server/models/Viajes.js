const Sequelize = require('sequelize');
const db = require('../config/database');

/* Definir un modelo, primer parametro nombre del modelo o de la tabla de la BD, 2do son los atributos, estos son los campos de la base de datos, excepto el id */
const Viaje = db.define('viaje', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
});

module.exports = Viaje;