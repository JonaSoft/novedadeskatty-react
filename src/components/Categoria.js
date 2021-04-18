import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import  '../Categoria.css'

const Categoria = ({categoria}) => {
    const {nombre,imagen, descripcion} = categoria;
    //console.log({imagen})
    const [productos, setProductos] = useState('');
    const verProducto =()=>{
        console.log('ir al Producto',{nombre});
        setProductos({nombre})
    }
    const linkProducto = `/catalogo/productos/${nombre}`
    

    return (
        <Fragment>
           
                
                    <div className="card"
                        onClick={verProducto}
                    >
                        <img
                            className="card-img-top"
                            src={imagen}
                            height="200"
                            alt={imagen}
                            title="Ver Productos"
                        />
                        <div className="card-body">
                            <Link to={linkProducto} className="link">
                                <h5 className="card-title tarjetas text-secondary">{descripcion}</h5>   
                            </Link>
                        </div>
                    </div>

              

           
            
            
        </Fragment>
        
      );
}
 
export default Categoria;