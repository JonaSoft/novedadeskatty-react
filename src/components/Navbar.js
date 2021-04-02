import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navbarra = (props) => {
  return (
    <div className="container-fluid" style={{background:'#08437D', height:'auto', minHeight:'60px'}}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h2 className="m-2" style={{fontFamily:'Pacifico,cursive',  color:'#ECF623'}}>Novedades Katty </h2>
          </div>  
          <div className="col-md-6 col-sm-12">
            <Nav className="container-fluid d-flex  justify-content-end" >
              <div className="container-fluid display-5 navlink d-flex  justify-content-end text-white mt-2">
                  
                  <NavLink className="navlink" href="/"><i className="fas fa-home"> <span> Inicio</span> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/catalogo"><i className="fas fa-clipboard-list"><span> Catálogo</span> </i></NavLink>
                  
                  
                  <NavLink className="navlink" href="/carrito"> <i className="fas fa-cart-arrow-down"><span> Carrito de Compras</span></i></NavLink>
                  
              </div>
            </Nav>
          </div>  
        </div>  
      
     
    </div>
  );
}

export default Navbarra;