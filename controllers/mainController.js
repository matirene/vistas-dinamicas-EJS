const platos = [
    {
        id: 1,
        nombre: 'Carpaccio fresco',
        precio: 'U$S 65.50',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        imagen: '/images/Carpaccio-de-salmon.jpg'
    },
    {
        id: 2,
        nombre: 'Risotto de berenjena',
        precio: 'U$S 47.00',
        descripcion: 'Risotto de berenjena y queso de cabra',
        imagen: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id: 3,
        nombre: 'Mousse de arroz',
        precio: 'U$S 27.50',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        imagen: '/images/Mousse-de-arroz-con-leche.jpg'
    },
    {
        id: 4,
        nombre: 'Espárragos blancos',
        precio: 'U$S 37.50',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        imagen: '/images/esparragos.png'
    }

]


const controller = {
    home: function (req, res){
        res.render('index', {platos: platos});
    },
    detalleMenu: function (req, res){
        let platoEncontrado = platos.find(plato => {
            return plato.id == req.params.id
        }); 
        res.render('detalleMenu', { menu: platoEncontrado });
    }
};

module.exports = controller;