import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navbarra = (props) => {
  return (
    <div className="container-fluid" style={{background:'#08437D', height:'auto', minHeight:'60px'}}>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-2">
          
          <img src="/imagenes/common.png" alt="" className="rounded-circle" width="40" height="40"/>
          <span className="m-2" style={{fontFamily:'Pacifico,cursive',  color:'#ECF623', fontSize:'22px'}}>  Novedades Katty </span>
        </div>  
          <div className="col-md-6 col-sm-12">
            <Nav className="container-fluid d-flex  justify-content-end" >
              <div className="container-fluid navlink d-flex  justify-content-end text-white mt-2">
                  
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