//Rutas para crear categorias
const express = require('express');
const router = express.Router();
const controllerCateg = require('../controllers/controllerCateg');

//crea categoria
// api/categorias
router.post('/',
    controllerCateg.crearCategoria
 );

 router.get('/',
    controllerCateg.obtenerCategorias
 )
module.exports = router;