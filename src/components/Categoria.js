import React,{Fragment} from 'react';
import  '../Categoria.css'

const Categoria = ({categoria}) => {
    const {nombre,imagen, descripcion} = categoria;
    //console.log({imagen})
    return (
        <Fragment>
           
                
                    <div className="card">
                        <img className="card-img-top"src={imagen}  height="300"alt="Hola"/>
                        <div className="card-body">

                            <h5  className="cardtitle tarjetas">{descripcion}</h5>
                        </div>
                    </div>

              

           
            
            
        </Fragment>
        
      );
}
 
export default Categoria;