import React,{Fragment, useState, useEffect} from 'react';
import Categoria from './Categoria';
import Animacion from './Animacion';
import '../App.css';

import clienteAxios from '../config/axios';

const Catalogo = () => {
  const [categorias, guardarCategoria] = useState(
    [
      {
        "nombre": "baño",
        "imagen": "/imagenes/baño.jpg",
        "descripcion": "Acondiciona tus servicios"
      },
      {
        "nombre": "cocina",
        "imagen": "/imagenes/cocina.jpg",
        "descripcion": "Nuestra moderna cocina"
      },
      {
        "nombre": "colegio",
        "imagen": "/imagenes/colegio.jpg",
        "descripcion": "Jovenes y escolares"
      },
      {
        "nombre": "comedor",
        "imagen": "/imagenes/comedor.jpg",
        "descripcion": "Reunión y ocasiones"
      },
      {
        "nombre": "dormitorio",
        "imagen": "/imagenes/dormitorio.jpg",
        "descripcion": "En nuestro espacio"
      },
      {
        "nombre": "estudio",
        "imagen": "/imagenes/estudio.jpg",
        "descripcion": "El rincon del ejecutivo"
      },
      {
        "nombre": "herramientas",
        "imagen": "/imagenes/herramientas.jpg",
        "descripcion": "Mis herramientas"
      },
      {
        "nombre": "mascotas",
        "imagen": "/imagenes/mascotas.jpg",
        "descripcion": "Mascotas con cariño"
      },
      {
        "nombre": "mujeres",
        "imagen": "/imagenes/mujeres.jpg",
        "descripcion": "Solo para nosotras"
      },
      {
        "nombre": "niños",
        "imagen": "/imagenes/niños.jpg",
        "descripcion": "Los engreidos del hogar"
      },
      {
        "nombre": "salud",
        "imagen": "/imagenes/salud.jpg",
        "descripcion": "Salud y bienestar"
      },
      {
        "nombre": "tecnologia",
        "imagen": "/imagenes/tecnologia.jpg",
        "descripcion": "Para mis Tecnologías"
      }
    ]
  )
  const obtenerCategorias = async () =>{
    try {
      //const resultado = await  clienteAxios.get('/api/categorias') ;
      //console.log(resultado.data.categorias)
      //await guardarCategoria(resultado.data.categorias)
    } catch (error) {
      console.log(error)
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
                Nuestro Catálogo por Categorias</h2>
            </div>
          </div>
           
         <div className="row mt-2">
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