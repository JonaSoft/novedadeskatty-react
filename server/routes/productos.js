const express = require('express');
const router = express.Router();
const controllerProd = require('../controllers/controllerCateg');

//crea categoria
// api/categorias
 router.get('/',
    controllerProd.obtenerProductos
 );
 
module.exports = router;