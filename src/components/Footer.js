import React, {Fragment} from 'react';
let  fecha = new Date();
fecha = fecha.getFullYear()
 
const Footer = () => {
    return (
      <Fragment>
           <div className="container-fluid mt-5"  style={{height:'auto', background:'#474743 ', color:'white', float:'bottom'}}>
           
            <div className="row">
                 
                  <div className="col-md-4 col-sm-12 text-center mt-2">
                          <h5>Siguenos por Facebook </h5>
                            <div className="align-items-center">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/imagenes/facebook.png" alt="" width="250" height="150"/>
                                   
                                </a>
                            </div>
                            <p>Visitanos!!! y mira nuestros videos.  Dale un "Me gusta". También puedes hacer tus pedidos y hacer tus consultas de cualquiera de nuestros productos.</p>

                        
                   </div>
                   <div className="col-md-4 col-sm-12 text-center mt-2">
                          <h5>Ahora también por WhatsApp</h5>
                          <div className="align-items-center">
                              
                              <a href="#" target="_blank" rel="noopener noreferrer">
                              <img src="/imagenes/whatsapp.jpg" alt="" width="250" height="150"/>
                              </a>
                          </div>
                          <h4>Escribenos al 555-555555</h4>
                          <p>De lunes a sabado de 9.00am hasta las 6.00pm</p>
                    </div>
                    <div className=" col-md-4 col-sm-12 text-center mt-2">
                          <h5>Comunicate con nosotros</h5>
                          <div className="container-fluid">
                              
                              <a href="#" target="_blank" >
                              <img src="/imagenes/callcenter.jpg" alt="" width="250" height="150"/>
                              </a>
                              
                          </div>
                          <p>Linea directa para ayudarte a realizar tus compras, pagos y seguimiento de tus pedidos.</p>
                          <h4>LLamanos al 999-999999</h4>

                        
                   </div>
                   
                   

            </div>
            <br></br>
            <div className="row">
                <div className="container-fluid d-flex justify-content-center">
                    <p className="text-secondary">&copy; Novedades Katty {fecha}</p>
                </div>
            </div>
          </div>
      </Fragment>

      );
}
 
export default Footer;