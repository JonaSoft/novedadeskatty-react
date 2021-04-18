const express = require('express');

//crea servidor
const app = express();

//puerto de app
const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT, () => {
    console.log('El servidor funcionando en el puerto '+ PORT)
})