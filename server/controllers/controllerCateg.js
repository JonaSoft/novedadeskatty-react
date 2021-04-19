const Categoria = require('../models/Categorias');

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
        res.status(500).send('Hubo un error');
        
    }

}