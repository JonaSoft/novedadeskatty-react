import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Animacion from './Animacion';

const Navbarra = (props) => {
  return (
    <div className="container-fluid animated fast fadeIn" style={{minHeight:'75px', maxHeight:'auto', width:'100%'}}>
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-2">
          
          <img id="imagen"src="/imagenes/common.png" alt="" className="rounded-circle " width="50" height="50" />
          <span className="mt-2" style={{fontFamily:'Pacifico,cursive',  color:'white', fontSize:'1.6em',fontWeight:'550',textShadow: '0.1em 0.12em gray'}}> NOVEDADES KATTY </span>
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