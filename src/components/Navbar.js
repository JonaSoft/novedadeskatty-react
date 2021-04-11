import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Animacion from './Animacion';

const Navbarra = (props) => {
  return (
    <div className="container-fluid" style={{height:'auto', minHeight:'60px',background:'#1E2B4A '}}>
      <div className="row">
        <div className="col-md-3 col-sm-12 mt-2">
          
          <img id="imagen"src="/imagenes/common.png" alt="" className="rounded-circle" width="40" height="40" />
          <span className="" style={{fontFamily:'Pacifico,cursive',  color:'#F7EA2C', fontSize:'1.5rem',fontWeight:'550',textShadow: '0.1em 0.12em gray'}}> Novedades Katty </span>
        </div> 
        <div className="col-md-6">
         < Animacion />
        </div>
          <div className="col-md-3 col-sm-12 mt-2">
            <Nav className="container-fluid d-flex  justify-content-end" >
              <div className="container-fluid navlink d-flex justify-content-end ">
                  
                  <NavLink className="navlink" href="/"alt="Inicio"><i className="fas fa-home fa-1x" title="Inicio"> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/catalogo"alt="Catálogo"><i className="fas fa-clipboard-list fa-1x" title="Ir al Catálogo"> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/carrito" alt="Carrito de compras"> <i className="fas fa-cart-arrow-down fa-1x" title="Mi carrito de compras"></i></NavLink>
                  
              </div>
            </Nav>
          </div>  
        </div>  
        
     
    </div>
    
    
  );
}

export default Navbarra;