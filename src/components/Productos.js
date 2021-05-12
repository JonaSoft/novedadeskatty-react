import React,{Fragment, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Producto from './Producto';
import Carrito from './Carrito';
import clienteAxios from '../config/axios';



const Productos = () => {
    //console.log(useParams());
    const {categoria} = useParams();

    //state para los productos
    const [productos, guardarProductos] = useState([
		//console.log('desde resultados por categoria')
		//localStorage.getItem('carrito')
    ]);

	
    //obtener productos
    const obtenerProductos = async() => {
        

        try {
            const resultado = await clienteAxios.get('/api/productos');
    
            await guardarProductos(resultado.data.productos);
           
        } catch (error) {
            console.log(error)
        }
    }
	
     //State Carrito de compras 
	 const [carrito, agregarProducto] = useState([]);
	

    useEffect(() => {
        obtenerProductos()
        

    }, []);
	//console.log('carrito desde resultados por categoria2',contenedor)  
	//localStorage.setItem('carrito', contenedor)

    return ( 
    <Fragment>
        <div className="container animated fast fadeIn" style={{height:'auto', minHeight:'auto'}}>
        <div className="row">
            <div className="col-md-12">
                <h2 className="text-center mt-4" style={{ fontFamily:'Carter One',fontSize:'2.5em'}}>
					Resultados por Categoria 
					</h2>
					
            </div>
          </div>
            
          <div className="row mt-2">
            <hr></hr>
            <div className="col-md-12">
                <div className="card-columns">
                    {productos.filter(nuevo => nuevo.nombre === categoria).map(producto =>(
                            <Producto 
                            key = {producto._id}
                            producto = {producto}
							carrito = {carrito}
							productos = {productos}
							agregarProducto = {agregarProducto}
                            
                            />
                            
                    ))} 
					
                </div>
            </div>
			
          </div>
						
        </div>
    </Fragment>
    
     );
}
 
export default Productos;