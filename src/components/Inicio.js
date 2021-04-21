import React,{Fragment} from 'react';

import Formulario from './Formulario';

import Carrousel from './Carrousel';
import Animacion from './Animacion';
import Chats from './Chats';

import Login from './Login';
import '../App.css'; 

const Inicio = () => {
    return ( 
        <Fragment>
            
            <br></br>
           
            <div className="container-fluid animated fast fadeIn" style={{height:'auto', minHeight:'1500px'}}>
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h2>Nosotros</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                   
                </div>
                <div className="row">
                        <div className="container d-flex justify-content-center mt-5">
                                <img src="/imagenes/ecommerce.jpg" width="85%" height="auto" />
                        </div>
                        
                    </div>
                <div className="row">
                    
                    <div className="col-md-12 mt-5">
                        <h2>Concursos y premios</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                   
                </div>
                <div className="row">
                        <div className="container d-flex justify-content-center mt-5">
                                <img src="/imagenes/regalos.jpg" width="85%" height="auto" />
                        </div>
                        
                    </div>
                <div className="row">

                    <div className="col-md-12 mt-5">
                        <h2>Nuestra Meta</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                    
                </div>
                
                    <div className="row">
                        <div className="container d-flex justify-content-center mt-5">
                                <img src="/imagenes/objetivo.jpg" width="85%" height="auto" />
                        </div>
                        
                    </div>
            </div>

           

        </Fragment>
        
     );
}
 
export default Inicio;