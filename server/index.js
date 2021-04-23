const express = require('express');
const conectarDB = require('./config/bd');
const cors = require ('cors');

//crea servidor
const app = express();

//conectar a base de datos
conectarDB();

//habilitar cors
app.use(cors())

//habilitar express.json
app.use(express.json({extended: true}));

//puerto de app
const PORT = process.env.PORT || 4000;

//importar rutas

app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/productos', require('./routes/productos'))
//arrancar la app
app.listen(PORT, () => {
    console.log('El servidor funcionando en el puerto '+ PORT)
})