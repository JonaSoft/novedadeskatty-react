import React,{Fragment,useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import './css/Producto.css';

import {ComprasContext} from '../context/ComprasContext'; 



const Producto = ({producto, carrito, productos, agregarProducto}) => {

    const [error, guardarError] = useState(false);

    const [cantidad, guardarCantidad] = useState({
        itemcantidad:''
    })
    //carrito de compras del context 
    
    const {guardarCarroCompras} = useContext(ComprasContext);
    
  
    const {categoria} = useParams();
    
    const {_id, nombre, imagen, precio, stock} = producto;
    //Inicio funcion zoom

    //Fin funcion zoom
 
    const comprarItem =  _id => {
        if( cantidad.itemcantidad==='0' || cantidad.itemcantidad===''){
            guardarError(true)
           
            return
        }
        guardarError(false);
        setTimeout(function(){ 
            alert("Agregado al carrito ");
            
         }, 500);
        const productosele = productos.filter( item => item._id === _id)[0];
        const productoselefinal = {...productosele, ...cantidad}
            console.log(productosele)

            console.log(cantidad.itemcantidad)
            console.log(productoselefinal)
            agregarProducto([
                ...carrito,
                productoselefinal
            ])
            
            guardarCarroCompras([
                ...carrito,
                productoselefinal
            ])
    }
    console.log('desde producto ', localStorage.getItem('carrito'));
    let comprastotal= localStorage.getItem('carrito')
    console.log('carrito storage',comprastotal)
    useEffect(() => {
        localStorage.setItem ('carrito', JSON.stringify(carrito))
        
    }, [comprarItem])
    //Obtener cantidad de compra por producto     
    const obtenerCantidadProducto = e =>{
        guardarCantidad({
            [e.target.name] : e.target.value
        })
        guardarError(false)
    }
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
                    <div className="container d-flex justify-content-center">
                        <h5>Cantidad a solicitar: </h5>
                        <input
                            name="itemcantidad"
                            className="redondeado confondo ml-2 " 
                            type="number"
                            placeholder="0"
                            min="1" max="10"
                            onChange={ obtenerCantidadProducto}
                        />
                    </div>
                    <div className="container">
                        { error
                                ? 
                                    <p className="alert text-danger display-5" style={{ fontFamily:'Carter One',fontSize:'1em'}}>
                                        Ingrese cantidad.....!!!!!!!!
                                    </p>
                                                            
                                : null

                        }
                    </div>
                    <div className="form-group container mt-2 col-md">
                        
                    
                        <button   style={{fontSize:'1.5em'}}
                            type="button"
                            className="btn btn-large btn-success btn-block"
                            onClick={()=>comprarItem(_id)}
                        
                        >Agregar al Carro </button>
                       
                        
                        
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
      );
}
 
export default Producto;