import React,{Fragment, useState} from 'react';
import Categoria from './Categoria'

const Catalogo = () => {
  const [categorias, guardarCategoria] = useState([
       
        {id: 1, nombre: 'baño', imagen: '/imagenes/baño.jpg', descripcion:'Para nuestros servicios'},
        {id: 2, nombre: 'cocina', imagen: '/imagenes/cocina.jpg', descripcion:'Nuestra moderna cocina'},
        {id: 3, nombre: 'colegio', imagen: '/imagenes/colegio.jpg', descripcion:'Jovenes y escolares'},
        {id: 4, nombre: 'comedor', imagen: '/imagenes/comedor.jpg', descripcion:'Reunión y ocasiones'},
        {id: 5, nombre: 'dormitorio', imagen: '/imagenes/dormitorio.jpg', descripcion:'Es nuestro espacio'},
        {id: 6, nombre: 'estudio', imagen: '/imagenes/estudio.jpg', descripcion:'El espacio ejecutivo' },
        {id: 7, nombre: 'herramientas', imagen: '/imagenes/herramientas.jpg', descripcion:'Mis herramientas'},
        {id: 8, nombre: 'mascotas', imagen: '/imagenes/mascotas.jpg', descripcion:'Mascotas con cariño'},
        {id: 9, nombre: 'mujeres', imagen: '/imagenes/mujeres.jpg', descripcion:'Solo para nosotras'},
        {id: 10, nombre: 'niños', imagen: '/imagenes/niños.jpg',descripcion:'Nuestros engreidos'},
        {id: 11, nombre: 'salud', imagen: '/imagenes/salud.jpg', descripcion:'Salud y belleza'},
        {id: 12, nombre: 'tecnologia', imagen: '../imagenes/tecnologia.jpg', descripcion:'Para mis Tecnologías'}
])
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1 className="text-center">Mira nuestras novedades</h1>
            </div>
            
          </div>
           
          <div className="row">
          <div className="card-columns">
            {categorias.map(categoria =>(
                <Categoria 
                key= {categoria.id}
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