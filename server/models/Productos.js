const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    nombre: {
        type:String
    },
    imagen: {
        type:String
    },
    precio: {
        type:String
    },
    stock: {
        type: String
    }
});
module.exports = mongoose.model('Productos', ProductosSchema)