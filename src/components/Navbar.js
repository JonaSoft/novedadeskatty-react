import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Animacion from './Animacion';
import Formulario from './Formulario';

const Navbarra = (props) => {
  return (
    <div className="container-fluid animated fast fadeIn" style={{minHeight:'70px', maxHeight:'auto', width:'100%', background:'black'}}>
      <div className="row">
        <div className="col-md-4 col-sm-12 p-2">
          
        <img id="imagen"src="/imagenes/common.png" alt="" className="rounded-circle m-2" width="60" height="60" />
          <span 
            className=""
            style={{fontFamily:'Pacifico,cursive',  color:'white', fontSize:'1.5em',fontWeight:'550',textShadow: '0.1em 0.12em gray'}}>
                NOVEDADES KATTY
               
          </span>

        </div> 
        <div className="col-md-6 col-sm-12">
         < Animacion />
        </div>
          <div className="col-md-2 col-sm-12 mt-2">
            <Nav className="container-fluid d-flex  justify-content-end" >
              <div className="container-fluid navlink d-flex justify-content-end ">
                  
                  <NavLink className="navlink" href="/"alt="Inicio"><i className="fas fa-home fa-2x" title="Inicio"> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/catalogo"alt="Catálogo"><i className="fas fa-clipboard-list fa-2x" title="Ir al Catálogo"> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/carrito" alt="Carrito de compras"> <i className="fas fa-cart-arrow-down fa-2x" title="Mi carrito de compras"></i></NavLink>
                  
              </div>
            </Nav>
          </div>  
        </div>  
        
       
    </div>
    
    
  );
}

export default Navbarra;