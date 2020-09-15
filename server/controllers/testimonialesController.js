
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.enviarTestimonial = async (req, res) => {
    /* Hasta este momento al ver en consola el resultado nos marca undefined, para solucionar esto instalamos la dependencia de body-parser, el req.body construira el objeto en base al atributo name establecido en el input */
/* console.log(req.body); */
    
    /* Validar que todos los campos esten llenos */
    let { nombre, correo, mensaje } = req.body;
    let errores = [];

    if (!nombre) {
        errores.push({'mensaje': 'Agrega Tu nombre'})
    }
    if (!correo) {
        errores.push({'mensaje': 'Agrega Tu correo Electronico'})
    }
    if (!mensaje) {
        errores.push({'mensaje': 'Agrega Tu Mensaje'})
    }

/* Revisar por errores */
    if (errores.length > 0) {
    /* Muestra la vista con errores, a la vista le pasamos las variables individuales para que en caso de que el usuario llene algunos campos y se olvide de uno, los llenados no se borren y pueda llenar el que le falto*/
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
    /* almacenar en la base de datos, al usar create te retorna un promise */
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}