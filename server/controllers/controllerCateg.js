
const Categoria = require('../models/Categorias');
const Productos = require('../models/Productos');


exports.crearCategoria = async (req, res) => {
    
    try {
            let categoria

            //crea nueva categoria
            categoria = new Categoria(req.body);

            //guardar categoria
            await categoria.save();

            res.send('Categoria creada correctamente')

    } catch (error) {

        console.log(error);
        res.status(400).send('hubo un error')

    }        
}
exports.obtenerCategorias = async(req,res) => {
    try {

        const categorias = await Categoria.find();
        res.json({categorias})

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al llamar categorias');
        
    }

}
exports.obtenerProductos = async(req,res) => {
   
    try {
        //import { useParams } from "react-router-dom";
        const productos = await Productos.find();
        res.json({productos});
        console.log(productos)
        //let {id} = useParams()
        //console.log(id)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al llamar productos');
        
    }
}