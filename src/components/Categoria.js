import React,{Fragment} from 'react';
import  '../Categoria.css'

const Categoria = ({categoria}) => {
    const {nombre,imagen, descripcion} = categoria;
    //console.log({imagen})
    return (
        <Fragment>
           
                
                    <div className="card">
                        <img className="card-img-top"src={imagen}  height="200"alt="Hola"/>
                        <div className="card-body">

                            <h5  className="card-title tarjetas text-secondary">{descripcion}</h5>
                        </div>
                    </div>

              

           
            
            
        </Fragment>
        
      );
}
 
export default Categoria;