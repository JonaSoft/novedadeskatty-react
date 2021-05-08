import React,{Fragment, useState, useContext, useEffect} from 'react';
import Categoria from './Categoria';
import '../App.css';
import { CategoriasContext } from '../context/CategoriasContext';

import clienteAxios from '../config/axios';

const Catalogo = () => {
  //cuando no hay conexion a internet
  
  const { categorias } = useContext( CategoriasContext);
  
  

  
    return (
      <Fragment>
        <div className="container animated fast fadeIn" style={{height:'auto', minHeight:'1500px'}}>
          <div className="row">
            <div className="col-md-12">
                <h2 className="text-center mt-4"style={{ fontFamily:'Carter One',fontSize:'2.5em'}}>
                Nuestro Catálogo por Categorias</h2>
            </div>
          </div>
           
         <div className="row">
          <hr></hr>
          <div className="container-fluid col-sm-12">
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
        
          
        
        </div>
      </Fragment>

      );
}
 
export default Catalogo;