import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import  '../Categoria.css'

const Categoria = ({categoria}) => {
    const {nombre,imagen, descripcion} = categoria;
    //console.log({imagen})
    //state pra guardar productos por categoria 
    const [productos, setProductos] = useState('');
    
    

    //LLamada del Producto
    const verProductos =()=>{
        
        setProductos({nombre})
        console.log('ir al Producto',{nombre});
    }
    const linkProducto = `/catalogo/productos/${nombre}`
    console.log(linkProducto)
    

    return (
        <Fragment>
           
           <Link to={linkProducto} className="link" style={{textDecoration:'none'}}>
                    <div className="card categoria"
                        onClick={verProductos}
                    >
                        <img id="cateproducto"
                            className="card-img-top"
                            src={imagen}
                            height="200"
                            alt={imagen}
                            
                        />
                        <div className="card-body">
                           
                                <h4 className="card-title tarjetas text-secondary">{descripcion}</h4>   
                            
                        </div>
                    </div>
            </Link>
              

           
            
            
        </Fragment>
        
      );
}
 
export default Categoria;