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
            

            
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Inicio 1</h2>
                        <img src="../imagenes/baño.jpg" width="200" height="200" />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Login />
                        
                    </div>
                </div>
            </div>

           

        </Fragment>
        
     );
}
 
export default Inicio;