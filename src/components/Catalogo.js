import React,{Fragment, useState, useEffect} from 'react';
import Categoria from './Categoria';
import Animacion from './Animacion';
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
        <div className="container animated fast fadeIn" style={{height:'auto', minHeight:'1500px'}}>
          <div className="row">
            <div className="col-md-12">
                <h2 className="text-center mt-4"style={{ fontFamily:'Carter One',fontSize:'2.5em'}}>
                Catálogo de Productos</h2>
            </div>
          </div>
           
         <div className="row mt-5">
          <hr></hr>
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