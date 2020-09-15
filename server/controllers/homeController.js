/* al trabajar con modelos y sequelize te van a retornar un promise */
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomepage =async(req, res) => {
    /* el valor del parametro es la carpeta donde se encuentra el elemento a procesar, como lo seria el archivo de pug */
    /* res.render('index', {
        clase: 'home'
    }); */

    const viajes = await Viaje.findAll({ limit: 3 });
    
    const testimoniales = await Testimonial.findAll({ limit: 3 });
    res.render('index', {
        pagina: 'Proximos Viajes',
        viajes,
        testimoniales,
        clase: 'home'
    });

}