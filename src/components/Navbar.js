import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navbarra = (props) => {
  return (
    <div className="container-fluid ">
      
      <Nav >
        <div className="container-fluid display-5 navlink d-flex  justify-content-end">
            
            <NavLink className="navlink" href="/"><i className="fas fa-home"> </i><span> Inicio</span></NavLink>
            
            
            <NavLink className="navlink" href="/catalogo"><i className="fas fa-clipboard-list"> </i><span> Catálogo</span></NavLink>
            
            
            <NavLink className="navlink" href="/carrito"> <i className="fas fa-cart-arrow-down"></i><span> Carrito de Compras</span></NavLink>
            
        </div>
      </Nav>
     
    </div>
  );
}

export default Navbarra;