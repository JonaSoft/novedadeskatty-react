import React,{Fragment} from 'react';

import Formulario from './Formulario';

import Carrousel from './Carrousel';
import Chats from './Chats';

import Login from './Login';

const Inicio = () => {
    return ( 
        <Fragment>
            <Formulario />
            <Carrousel />
            <br></br>
            <div className="container-fluid" style={{minheight:'1200px', height:'auto'}}>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Nosotros</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                    <div className="container d-flex justify-content-center mt-5">
                        
                        <img src="../imagenes/baño.jpg" width="200" height="200" />
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-12">
                        <h2>Concursos y premios</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                    <div className="container d-flex justify-content-center">
                        <img src="/imagenes/colegio.jpg" width="200" height="200" />
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">
                        <h2>Nuestra Filosofia</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis impedit vel asperiores assumenda. Facere, placeat dignissimos quaerat nesciunt, ut maxime corporis odit quae dicta blanditiis explicabo odio sit. Nostrum.</span>
                        
                    </div>
                    <div className="container d-flex justify-content-center">
                        <img src="/imagenes/mujeres.jpg" width="200" height="200" />
                    </div>
                </div>
            </div>

           

        </Fragment>
        
     );
}
 
export default Inicio;