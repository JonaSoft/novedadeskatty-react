import React,{Fragment, useContext} from 'react';
import { useParams } from 'react-router-dom';
import './css/Producto.css';

import {ComprasContext} from '../context/ComprasContext';


const Producto = ({producto, carrito, productos, agregarProducto}) => {

   
    //carrito de compras del context 
    
    const {guardarCarroCompras} = useContext(ComprasContext)

    ////fin carritocompras 

    const {categoria} = useParams();
    
    const {_id, nombre, imagen, precio, stock} = producto;
    //Inicio funcion zoom

    //Fin funcion zoom
 
    const comprarItem =  _id => {
     
        const productosele = productos.filter( item => item._id === _id)[0];
            console.log(productosele)
            agregarProducto([
                ...carrito,
                productosele
            ]);
            guardarCarroCompras([
                ...carrito,
                productosele
            ])
    }
        console.log(carrito)
    return (
        <Fragment>
            <div className="col-md-12">
          
            
            <div className="card animated fast fadeIn contenedor ">
                <img
                    className="card-img-top imagen"
                    src={imagen}
                    height="350"
                    alt={imagen}
                    title="Producto"
                />
                <div className="card-body">
                    <h5>Código: <span className="itemid">{_id}</span></h5>
                    <h5>Categoria: {nombre}</h5>
                    <h5>Items Disponibles: {stock}</h5>
                    <h5 className="card-title text-secondary">
                        Precio Unid.:   S/.
                        <span className="text-danger display-precio">{precio}</span>
                    </h5>
                    <div className="form-group col-md">
                    <button   style={{fontSize:'1.5em'}}
                        type="button"
                        className="btn btn-large btn-success btn-block"
                        onClick={()=>comprarItem(_id)}
                       
                    >Comprar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
      );
}
 
export default Producto;