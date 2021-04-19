const mongoose = require('mongoose');

const CategoriasSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Categoria', CategoriasSchema)