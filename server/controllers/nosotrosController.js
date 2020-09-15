exports.infoNosotros = (req, res) => {
    /* render toma como primer parametro la vista y en segundo parametro un objeto donde se pueden guardar variables para esa vista */ 
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}