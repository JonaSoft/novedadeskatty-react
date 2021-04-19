import React,{Fragment, useState, useEffect} from 'react';
import Categoria from './Categoria';
import '../App.css';

import clienteAxios from '../config/axios';

const Catalogo = () => {
  const [categorias, guardarCategoria] = useState([])
  const obtenerCategorias = async () =>{
    try {
      const resultado = await  clienteAxios.get('/api/categorias') ;
      console.log(resultado.data.categorias)
      guardarCategoria(resultado.data.categorias)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    obtenerCategorias()
    }, [])  
    return (
      <Fragment>
        <div className="container animated fast fadeIn" style={{minheight:'1200px', height:'1500px'}}>
          <div className="row">
            <div className="col-md-12">
                <h2 className="text-center" style={{ fontFamily:'Carter One',}}>Productos para ti y tu familia</h2>
                <br></br>
            </div>
            
          </div>
           
          <div className="row">
          <div className="card-columns">
            {categorias.map(categoria =>(
                <Categoria 
                key= {categoria._id}
                categoria = {categoria}
               
              />
                    
          ))
          } 
            </div>

          </div>
        
          
        
        </div>
      </Fragment>

      );
}
 
export default Catalogo;