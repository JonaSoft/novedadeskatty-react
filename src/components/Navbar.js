import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navbarra = (props) => {
  return (
    <div className="container-fluid" style={{background:'#08437D', height:'auto'}}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="" style={{fontFamily:'Ubuntu', color:'#D7E023'}}>Novedades </h1>
          </div>  
          <div className="col-md-6 col-sm-12">
            <Nav >
              <div className="container-fluid display-5 navlink d-flex  justify-content-end text-white mt-2">
                  
                  <NavLink className="navlink" href="/"><i className="fas fa-home"> </i><span> Inicio</span></NavLink>
                  
                  
                  <NavLink className="navlink" href="/catalogo"><i className="fas fa-clipboard-list"> </i><span> Catálogo</span></NavLink>
                  
                  
                  <NavLink className="navlink" href="/carrito"> <i className="fas fa-cart-arrow-down"></i><span> Carrito de Compras</span></NavLink>
                  
              </div>
            </Nav>
          </div>  
        </div>  
      
     
    </div>
  );
}

export default Navbarra;